# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

import ipfsapi
import uuid
import time
# import requests
from crate import client
# import base64
# import os
import io
# import re

import pywaves as pw

from . import api
from flask import jsonify, request, g, make_response
from errors import bad_request, validation_error, unavailable

@api.route('/tweets', methods=['POST'])
def create_tweet():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    tweet_id = str(uuid.uuid4())
    tweet_created = int(time.time())
    user_id = request.json['userId']
    retweet_id = request.json['retweetId']
    retweet_from_user_id = ''

    cursor.execute("""
      SELECT user_name, priv_key
      FROM users
      WHERE id='{user_id}'
    """.format(
      user_id=user_id
    ))
    user = cursor.fetchone()
    user_name = user[0]
    user_priv_key = user[1]

    user_wallet = pw.Address(privateKey=user_priv_key)

    if retweet_id == None:
      print '--> Init tweet'
      
      filename = "./files/tweet_{0}.txt".format(tweet_id)
      message = request.json['message']
      

      print '--> Generating file ' + filename
      with io.FileIO(filename, "w+") as f:
        f.write(request.json['message'])
        print '--> Connections to ' + g.ipfs
        ipfs = ipfsapi.Client(g.ipfs, 5001)
        print '--> Connected to IPFS'
        print '--> Adding ' + filename
        ipfs_res = ipfs.add(filename)
        print '--> Added ' + filename
        print ipfs_res
        ipfs_hash = ipfs_res['Hash']
        # file_name = ipfs_res['Name']
      
      print '\n--> Generating new address for tweet by ' + user_name
      
      wallet = pw.Address()
      print wallet
      print '\n--> Sending transaction to {0}'.format(wallet.address)
      tx = user_wallet.sendWaves(recipient = wallet, amount = 1)
      print '--> Tweet created; TxID: ' + tx['id']

    else:
      print '\n--> Init retweet'

      wallet = pw.Address(privateKey=g.retweet_wallet_priv_key)
      ipfs_hash = ''

      cursor.execute("""
        SELECT user_id, message
        FROM tweets
        WHERE id='{retweet_id}'
      """.format(
        retweet_id=retweet_id
      ))
      retweet_data = cursor.fetchone()
      retweet_from_user_id = retweet_data[0]
      message = retweet_data[1]

      cursor.execute("""
        SELECT id, user_name
        FROM users
        WHERE id='{user_id}'
      """.format(
        user_id=retweet_from_user_id
      ))
      retweet_user_data = cursor.fetchone()
      
      print '\n--> Sending retweet transaction to {0}'.format(wallet.address)
      tx = user_wallet.sendWaves(recipient = wallet, amount = 1, attachment=str(retweet_id))
      print '--> Retweet created; TxID: ' + tx['id']

    

    print '--> Saving data to DB'
    cursor.execute("""
      INSERT INTO tweets(
        id,
        user_id,
        address,
        pub_key,
        priv_key,
        txid,
        ipfs_hash,
        message,
        retweeted_from,
        created)
      VALUES(
        '{id}', 
        '{user_id}',
        '{address}', 
        '{pub_key}', 
        '{priv_key}', 
        '{txid}', 
        '{ipfs_hash}',
        '{message}',
        '{retweeted_from}',
        '{created}')
    """.format(
      id=tweet_id, 
      user_id=user_id,
      address=wallet.address,
      pub_key=wallet.publicKey,
      priv_key=wallet.privateKey,
      txid=tx['id'],
      ipfs_hash=ipfs_hash,
      message=message,
      retweeted_from=retweet_from_user_id,
      created=tweet_created
    ))    
    print '--> Data saved. All good.'
    
  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()
  
  data = {
    'id': tweet_id,
    'userId': user_id,
    'address': wallet.address or '',
    'txid': tx['id'],
    'ipfsHash': ipfs_hash,
    'message': message,
    'retweetedFrom': {
      'id': retweet_user_data[0],
      'userName': retweet_user_data[1]
    } if retweet_id else False,
    'created': tweet_created
  }

  response = make_response(jsonify(data))
  response.status_code = 201
  return response



@api.route('/tweets/<user_id>', methods=['GET'])
def get_tweets(user_id):
  connection = client.connect(g.db)
  cursor = connection.cursor()
  try:
    cursor.execute("""
      SELECT 
        t.id,
        t.user_id,
        t.address,
        t.pub_key,
        t.priv_key,
        t.txid,
        t.ipfs_hash,
        t.message,
        t.retweeted_from,
        t.created,
        u.id,
        u.user_name
      FROM tweets t
      LEFT JOIN users u ON t.retweeted_from = u.id
      WHERE user_id='{user_id}'
      ORDER BY created DESC
    """.format(
      user_id=user_id
    ))
    tweets = cursor.fetchall()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if len(tweets) == 0:
    return ('', 204)

  data = [{
      'id': tweet[0],
      'user_id': tweet[1],
      'address': tweet[2],
      'pubKey': tweet[3],
      'privKey': tweet[4],
      'txid': tweet[5],
      'ipfsHash': tweet[6],
      'message': tweet[7],
      'retweetedFrom': False if tweet[8] == '' else {
        'id': tweet[10],
        'userName': tweet[11]
      },
      'created': tweet[9]
    } for tweet in tweets]

  response = make_response(jsonify(data))
  response.status_code = 200
  return response



# @api.route('/retweet', methods=['POST'])
# def retweet():
#   pass

# @api.route('/users/<user_id>', methods=['GET'])
# def get_user(user_id):
#   connection = client.connect(g.db)
#   cursor = connection.cursor()

#   try:
#     cursor.execute("""
#       SELECT
#         u.id,
#         u.user_name,
#         u.txid,
#         u.address,
#         u.created
#       FROM users u
#       WHERE u.id='{user_id}'
#     """.format(user_id=user_id))
#     user = cursor.fetchone()

#     cursor.execute("""
#       SELECT 
#         id,
#         user_id,
#         address,
#         pub_key,
#         priv_key,
#         txid,
#         ipfs_hash,
#         created
#       FROM tweets
#       WHERE user_id='{user_id}'
#     """.format(
#       user_id=user[0]
#     ))
#     tweets = cursor.fetchall()


#   except Exception, error:
# 		return bad_request(error)
#   finally:
#     cursor.close()
#     connection.close()

#   if len(tweets) == 0:
#     return ('', 204)

#   data = {
#     'user': {
#       'id': user[0],
#       'userName': user[1],
#       'address': user[2],
#       'txid': user[3],
#       'posted': user[4]
#     },
#     'tweets': [{
#       'id': tweet[0],
#       'user_id': tweet[1],
#       'address': tweet[2],
#       'pub_key': tweet[3],
#       'priv_key': tweet[4],
#       'txid': tweet[5],
#       'ipfs_hash': tweet[6],
#       'created': tweet[7]
#     } for tweet in tweets]
#   }

#   response = make_response(jsonify(data))
#   response.status_code = 200
#   return response



# @api.route('/files', methods=['POST'])
# def save_files():
# 	connection = client.connect(g.db)
# 	cursor = connection.cursor()

# 	try:
# 		user_id = request.form['userId']
# 		ipfs = ipfsapi.Client(g.ipfs, 5001)

# 		files = []
# 		for file_name in request.files:
# 			posted = int(time.time())
# 			file_id = str(uuid.uuid4())
# 			res = ipfs.add(request.files[file_name])

# 			row = {
# 				'id': file_id,
# 				'fileName': file_name,
# 				'ipfsHash': res['Hash'],
# 				'posted': posted
# 			}

# 			cursor.execute("""
# 				INSERT INTO files(id, user_id, file_name, ipfs_hash, posted)
# 				VALUES ('{file_id}', '{user_id}', '{file_name}', '{ipfs_hash}', '{posted}')
# 			""".format(
# 				file_id=file_id,
# 				user_id=user_id,
# 				file_name=file_name,
# 				ipfs_hash=res['Hash'],
# 				posted=posted
# 			))

# 			files.append(row)

# 	except Exception, error:
# 		print 'ERROR: ', error
# 		return bad_request(error)
# 	finally:
# 		cursor.close()
# 		connection.close()

# 	data = {
# 		'userId': user_id,
# 		'files': files
# 	}

# 	response = make_response(jsonify(data))
# 	response.status_code = 201
# 	return response



# @api.route('/files/user/<user_id>', methods=['GET'])
# def get_user_files(user_id):
# 	connection = client.connect(g.db)
# 	# data = request.get_json()
# 	try:
# 		cursor = connection.cursor()
# 		cursor.execute("""
# 			SELECT
#               id,
# 			  user_id,
# 			  file_name,
# 			  ipfs_hash,
# 			  posted
#             FROM files
# 			WHERE user_id='{user_id}'
# 			ORDER BY posted DESC
#         """.format(user_id=user_id))
# 		results = cursor.fetchall()
# 	except Exception, error:
# 		return bad_request(error)
# 	finally:
# 		if len(results) == 0:
# 			return ('', 204)

# 		data = [{
#             'id': result[0],
# 			'userId': result[1],
# 			'fileName': result[2],
# 			'ipfsHash': result[3],
# 			'posted': result[4]
#         } for result in results]

# 		cursor.close()
# 		connection.close()

# 	response = make_response(jsonify(data))
# 	response.status_code = 200
# 	return response


# @api.route('/files/<file_id>', methods=['GET'])
# def get_file(file_id):
# 	connection = client.connect(g.db)
# 	# data = request.get_json()
# 	try:
# 		cursor = connection.cursor()
# 		cursor.execute("""
# 			SELECT
#               id,
# 			  user_id,
# 			  file_name,
# 			  ipfs_hash,
# 			  posted
#             FROM files
# 			WHERE id='{file_id}'
# 			ORDER BY posted DESC
#         """.format(file_id=file_id))
# 		result = cursor.fetchone()

# 	except Exception, error:
# 		return bad_request(error)
# 	finally:
# 		if not result:
# 			return ('', 204)

# 		data = {
#             'id': result[0],
# 			'userId': result[1],
# 			'fileName': result[2],
# 			'ipfsHash': result[3],
# 			'posted': result[4]
#         }

# 		cursor.close()
# 		connection.close()

# 	response = make_response(jsonify(data))
# 	response.status_code = 200
# 	return response



# @api.route('/users/<user_id>', methods=['DELETE'])
# def delete_user(user_id):
#     connection = client.connect(g.db)
#     print user_id
#     try:
#         cursor = connection.cursor()
#         cursor.execute("""
#             DELETE FROM users
#             WHERE id='{user_id}'
#         """.format(user_id=user_id))
#     except Exception, error:
#         return bad_request(error)
#     finally:
#         cursor.close()
#         connection.close()
#     return ('', 204)
