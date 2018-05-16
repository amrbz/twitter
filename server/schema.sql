

CREATE TABLE users(
  id string,
  user_name string,
  address string,
  pub_key string,
  priv_key string,
  txid string,
  created TIMESTAMP
)


CREATE TABLE tweets(
  id string,
  user_id string,
  address string,
  pub_key string,
  priv_key string,
  txid string,
  ipfs_hash string,
  message string,
  retweeted_from string,
  created timestamp
)
