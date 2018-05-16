# Voting on blockchain

1. Create *twitter* directory and copy repo to it
```
git clone git@github.com:amrbz/twitter.git voting
```
2. Run docker compose file and build required containers

```
cd twitter
docker-compose up -d
```

3. Visit http://localhost:4206 to enter Crate IO panel and select *Console* tab. 
4. Create tables from */server/schema.sql*
5. Visit http://localhost:7600

To display server logs run:
```docker logs -f twitter_server_1```


