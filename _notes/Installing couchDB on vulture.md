# Installing couchDB on vulture


1. Install with snap
2. Navigate to the `default.ini` file.
	This usually is in `/snap/couchdb/9/opt/couchdb/
3. change bind address to 0.0.0.0
4. Uncomment the admin line and set the password
5. follow [this link](https://ubuntu.com/server/docs/security-firewall) to enable access to the port `5984`
	1. `sudo ufw enable`
	2. `sudo ufw allow 5984`
6. access the link `http://\<your link here\>:5984/_utils#setup`
7. Follow [this tutorial](https://github.com/baggachipz/tinylist/wiki/Configuring-CouchDB-for-use-with-TinyList) to properly configure your couchDB instance
8. Profit

Hope you've found this useful!