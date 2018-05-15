# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# import ipfsapi
import uuid
import time
# import requests
from crate import client
# import base64
# import os
# import io
# import re

import pywaves as pw

from . import api
from flask import jsonify, request, g, make_response
from errors import bad_request, validation_error, unavailable

@api.route('/users', methods=['POST'])
def create_user():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    user_id = str(uuid.uuid4())
    user_created = int(time.time())
    user_name = request.json['userName']
    root_wallet = pw.Address(privateKey=g.root_wallet_priv_key)
    
    print '\n--> Generating new address for user ' + user_name
    
    wallet = pw.Address()
    print wallet
    print '\n--> Sending transaction to {0}'.format(wallet.address)
    user_tx = root_wallet.sendWaves(recipient = wallet, amount = 5000000, attachment=str(user_name))
    print '--> User created; TxID: ' + user_tx['id']

    print '--> Saving data to DB'
    cursor.execute("""
      INSERT INTO users(
        id,
        user_name,
        txid,
        address,
        pub_key,
        priv_key,
        created)
      VALUES(
        '{id}', 
        '{user_name}',
        '{txid}', 
        '{address}', 
        '{pub_key}', 
        '{priv_key}', 
        '{created}')
    """.format(
      id=user_id, 
      user_name=user_name,
      address=wallet.address,
      pub_key=wallet.publicKey,
      priv_key=wallet.privateKey,
      txid=user_tx['id'],
      created=user_created
    ))    
    print '--> Data saved. All good.'
    
  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()
  
  data = {
    'id': user_id, 
    'userName': user_name,
    'txid': user_tx['id'],
    'address': wallet.address,
    'created': user_created
  }

  response = make_response(jsonify(data))
  response.status_code = 201
  return response


@api.route('/users', methods=['GET'])
def get_users():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    cursor.execute("""
      SELECT
        id,
        user_name,
        txid,
        address,
        created
      FROM users
    """)
    users = cursor.fetchall()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if len(users) == 0:
    return ('', 204)

  data = []
  for user in users:
    data.append({
      'id': user[0],
      'userName': user[1],
      'txid': user[2],
      'address': user[3],
      'created': user[4]
    })

  response = make_response(jsonify(data))
  response.status_code = 200
  return response


@api.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    cursor.execute("""
      SELECT
        u.id,
        u.user_name,
        u.txid,
        u.address,
        u.created
      FROM users u
      WHERE u.id='{user_id}'
    """.format(user_id=user_id))
    user = cursor.fetchone()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if not user:
    return ('', 204)

  data = {
    'id': user[0],
    'userName': user[1],
    'address': user[2],
    'txid': user[3],
    'posted': user[4]
  }

  response = make_response(jsonify(data))
  response.status_code = 200
  return response

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
