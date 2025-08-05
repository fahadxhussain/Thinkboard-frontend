## Setting up the frontend
First of all open the frontend folder and type **npm create vite@latest .**. Dot is to create project in the same folder.
Then install all the dependencies by **npm install**.
Then install react router through **npm install react-router**.
Then the notofication library **npm install react-hot-toast**.
Then go to the tailwind website, select a framework you are using, vite in this case. Follow the instructions and you are good to go.
Delete all the unnecessary files like the *app.css* and the *asets* folder. Make sure you remove the imports of those files.


## Project Structure
Create a folder named as pages in the *src* folder.
Create *HomePage.jsx* , *DetailPage.jsx*, *CreatePage.jsx*.
In the **main.jsx** wrap the *<App/>* in the **<BrowserRouter> <BrowserRouter/>**.
In the App.jsx create **<Routes><Routes/>** and inside the <Routes> there is a **Route** for each page having the *path* and the *element* which will show upon the path.

## Daisy UI
Install the DaisyUI through **npm i daisyui@4.12.24** for cleaner and styled code.
Import the daisyui in the *tailwind.config.js* and add it to the plugins **plugins: [daisyui]**.
Go to DaisyUI website, you can find a lot of components and all the things you can copy from there.
For themes, go to themes and write themes of your choice in the *tailwind.config.js* like this *daisyui: {themes: ["forest"]},*.
You can find all this detail on the DaisyUI website.


## The Home Page
First of all install **npm install lucide-react**.
Then **npm i axios**

**bg.ibelick.com** for styles and gradients

## Git
**git init**
**git add .**
**git commit -m "message"**
Create an empty repository
