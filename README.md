# Blogging-Engine
This project is for COEN 161 final project

The localhost port number is 3000.

# APIs:
http://localhost:3000/api/get This API will return the all the blogs in the database

http://localhost:3000/api/post This API also user to post new blog, title, content will be needed on the JSON object

http://localhost:3000/api/single This API will return a single blog information. ID will be needed one the JSON object

http://localhost:3000/api/comment This API will post a comment to a single blog. ID and comment will be needed on the JSON object

# Sample curl commends:
/api/get: curl localhost:3000/api/get

/api/post: curl -H "content-type: application/json" -d '{"title": "sample title", "content": "sample content"}' localhost:3000/api/post

/api/single: curl localhost:3000/api/single?id=5fcf11df631eba3993faca6b

/api/comment: curl -H "content-type: application/json" -d '{"comment": "sample comment","id":"5fcf11df631eba3993faca6b"}' localhost:3000/api/comment

# Stats will be updated later
