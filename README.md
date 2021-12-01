# wayru-test-1
- React (Typescript) +  Redux
- Serverless was tried to be implemented, but I am assuming that because of the free tier of my AWS Account and the build size, it cannot be deployed. I could be wrong thouugh.
Also, Regarding the error I'm getting I found several github issues on aws serverless repository, and isn't fixed yet.  

# Instructions to run:

1. git clone 
2. cd my-app
3. npm install
4. npm start

# Instructions to deploy
Unfortunately the build size is greater than what free tier provides

1. sls delpoy
2. open https://my-serverless-react-app-12345.s3.amazonaws.com/index.html
