# Birthday Memories 🥳
Share photos and videos of you and your best friends / loved ones on their birthday with this simple React App.

![alt text](/screenshots/mobile-1.png "Mobile screenshot 1") | ![alt text](/screenshots/desktop.png "Mobile screenshot 2") | ![alt text](/screenshots/mobile-2.png "Desktop screenshot") 
--- | --- | ---

## Requirements 📄
- [Node.js](https://nodejs.org/en/download/)

## Running the App 👟
1. Clone/download the repository
2. `cd` into the repository
3. Type `npm install` to install all the necessary packages
4. Type `npm start` to start the app
5. Go to your web browser and type `localhost:3000` if it doesn't automatically appear

## Adding Your Own Photos and Videos 🌅
This part is pretty straight forward. Just drop your images in the `src/images/` folder and your videos in the `src/videos/` folder. Next, go the `data.json` file. This is where you tell the app what photos and videos to load. Here is an example of what it looks like:
```
{
  "info": {
    "age": "24th",
    "name": "Adam",
    "author": "Michael"
  },
  "videos": [
    {
      "id": "vid-1",
      "name": "Andrew",
      "src": "andrew.mov"
    }
  ],
  "images": [
    {
      "id": "img-1",
      "name": "Lexi",
      "src": "lexi.jpg"
    }
  ]
}
```
- info
  - age = the age the person is turning (i.e. 21st)
  - name = the name of the person whose birthday it is
  - author = the person who made the app for them; this appears at the bottom of the app
- videos
  - id = anything as long as it's unique
  - text = the text that will appear on the card
  - src = the name of the video file (make sure this is __exactly the same__, even the extension and upper/lowercase)
- images
  - id = anything as long as it's unique
  - text = the text that will appear on the card
  - src = the name of the image file (make sure this is __exactly the same__, even the extension and upper/lowercase)
 
To add multiple photos and videos, just create copies of the JSON objects surrouding by {} braces and separate them by commas. If you only want one or the other, just leave the `videos` or `photos` array blank. Here are some examples:

### Photos and Videos 📸 📹
``` 
{
  "info": {
    "age": "24th",
    "name": "Adam",
    "author": "Michael"
  },
  "videos": [
    {
      "id": "vid-1",
      "name": "Michael",
      "src": "michael.mov"
    },
    {
      "id": "vid-2",
      "name": "Andrew",
      "src": "andrew.mov"
    }
  ],
  "images": [
    {
      "id": "img-1",
      "name": "Lexi",
      "src": "lexi.jpg"
    },
    {
      "id": "img-2",
      "name": "Diana",
      "src": "diana.jpg"
    }
  ]
}
``` 

### Only Videos 📹
``` 
{
  "info": {
    "age": "24th",
    "name": "Adam",
    "author": "Michael"
  },
  "videos": [
    {
      "id": "vid-1",
      "name": "Michael",
      "src": "michael.mov"
    },
    {
      "id": "vid-2",
      "name": "Andrew",
      "src": "andrew.mov"
    }
  ],
  "images": []
}
``` 

### Only Photos 📸
``` 
{
  "info": {
    "age": "24th",
    "name": "Adam",
    "author": "Michael"
  },
  "videos": [],
  "images": [
    {
      "id": "img-1",
      "name": "Lexi",
      "src": "lexi.jpg"
    },
    {
      "id": "img-2",
      "name": "Diana",
      "src": "diana.jpg"
    }
  ]
}
``` 

Save your changes and the app should reload with your photos and videos. If your video doesn't show up, you might need to use iMovie or some other video editing software to change its file format.

## Deploying it Live 💻
So if you want your friend or loved one to be able to see it on their phone, you should probably deploy it somewhere. I used Heroku to make it happen. It was fairly painless and completely free. 

To get set up with Heroku and Node.js, follow [this tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs). The introduction and setup sections should suffice.

Then, use [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack#usage) to deploy the app to Heroku. The usage section walks you through the process.

## Libraries Used 💯
- [React.js](https://reactjs.org/) for building the UI
- [Lottie](https://github.com/airbnb/lottie-web) for adding animations