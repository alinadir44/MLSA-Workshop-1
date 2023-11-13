[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# Your Personal Portfolio using React and Github Pages

_Just edit this template and you'll be set._ ✨

The hard part is already done. Using this repository you can set up your very own portfolio website in a matter of minutes. All you have to do is work through the steps.

## An overview of what you'll be doing
1. creating your own copy of this template.
1. creating your codespace.
1. editing this template to include your information.
1. editing the website template.
1. deploying the website to github pages so that everyone can visit your portfolio..
<br />

### But before you start, you'll need to:

* **Have a Github account**. If you have one, great, just log in. In case you dont remember the password, create a new account using your NUCES email address. (remove this part incase a gh account is needed to view this file)
* **Fork this repository into your own account.** Forking is like obtaining your own copy of the project and all of its contents. You might wonder if its legal to recreate someone else's project. Good for us, Github is all about open source and collaboration.
* **Start your codespaces container** A container is like a PC running on a remote server that you can access from anywhere, which means that you can write code from anywhere without getting into the fuss of environment setup.

![JavaScript profile web application](/__images__/js-portfolio-site.gif "JavaScript profile web application")

<br />

## Getting Started
What you are provided with is a frontend template made using React framework to help you build your portfolio. The goal is to give you a template that you can immediately utilize.

The repo contains the following:

* `/.devcontainer`
  - `.devcontainer/Dockerfile` Configuration file used by Codespaces to determine operating system of your remote PC and other details.
  - `.devcontainer/devcontainer.json` Configuration file used by Codespaces to configure Visual Studio Code settings, such as the enabling of additional extensions.
* `/__images__` contains all the images, videos and GIFs you used on your webiste.
* `/src` contains all the main code files such as HTML, CSS, JS and others.
* `package.json` and `package-lock.json` contains the information that the project's package manager will need to keep the project's dependencies consistent on every team member's device.

<br />

### Creating your portfolio

1. Fork this repo from this [link](https://github.com/alinadir44/MLSA-Workshop-1)
1. Before creating the Codespace, enable GitHub Copilot for your account. If it is not enabled, take a look at [Customize your portfolio site using Copilot](#-customize-your-site-in-3-steps).
1. Navigate to the main page of the newly forked repository.
3. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".

    <img src="./__images__/mycreatecodespace.png" alt="Create codespace" style="width:270px;"/>

    
4. Wait as GitHub initializes the Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
5. When complete you will see your Codespace load with a terminal section at the bottom. Codespaces will install all the required Visual Studio Code extensions in your container, followed by executing `npm install`. Once the package installs are completed, Codesaces will execute `npm start` to start your web application running within your Codespace. 

   When the web application has successfully started you will see a message in the terminal that the server is running on port 1234 within your Codespace:

   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Web application started on port 1234" style="width: 300px;"/>

   A built-in browser will be launched to showcase the current template.
   
<br />

## ✨ Customizations!

This project is built to be easily customizable. Each section of the site is a separate component, and your information needs to be set in only one spot. This is not only for ease of updating, but so you can see how prop values are passed to React components.



### 1️⃣ Add your "About me" and social accounts

Within `/src/App.jsx` you will see a variable called `siteProps`. This is a JavaScript object that hold the key value pairs needed to customize your name, title, email, and social accounts.

```javascript
const siteProps = {
  name: "Eleanor Murphy",
  title: "UX Developer & Digital Strategist",
  email: "eleanor@example.com",
  gitHub: "eleanor_dev",
  instagram: "eleanor.designs",
  linkedIn: "eleanor-murphy",
  medium: "eleanor-writes",
  twitter: "eleanor_tweets",
  youTube: "eleanor_creates",
};

```

Update to the name and title you'd like displayed at the top of your site.

_Optional values_ are email address and social accounts. These are used in the `Footer` component. If any item is not included in the list or set to an empty string ("") it will not display the icon and link.

### 2️⃣ Update images

This portfolio site includes 3 images: top section background, "About me" background and portfolio section (desk). These can be any **landscape** sized images of your choosing from your own collection, or found that have a license allowing you to use without attribution.

A couple possible sites to find photos are [Pixabay](https://pixabay.com/) and [Unsplash](https://unsplash.com). Photos, illustrations, vectors, your choice! When you find your images, save each one to `/src/images` with a short, meaningful file name.

Go to the following below components to update the `import image...` line to reference the new image you downloaded for that section, as well as the `imageAltText` for the image:

* `/src/Components/Home.jsx` - section at top of the page, main image you will see when site loads.
   ```javascript
      import image from "../images/[name of your image and extension]";
      const imageAltText = "a description of your image";
   ```
* `/src/Components/About.jsx` - background behind the detailed "About me" section.
   ```javascript
      import image from "../images/[name of your image and extension]";
      const imageAltText = "a description of your image";
   ```
* `/src/Components/Portfolio.jsx`- image highlighted in left hand side of section.
   ```javascript
      import image from "../images/[name of your image and extension]";
      const imageAltText = "a description of your image";
   ```

### 3️⃣ Add items you've worked on and detail text

The About section helps to give people a bit more information about your skills and passions. Within `/src/Components/About.jsx` you will find 2 values to update:

* `description`: short sentence or two describing yourself, career goals, and/or passions
* `detailOrQuote`: longer block for you to add more detail about yourself, or even a quote you like

The second section to update is the Portfolio section, where you highlight items you've worked on. These would be articles, videos, logo designs, GitHub projects, anything that highlights you!

Go to `/src/Components/Portfolio.jsx` to the `projectList` variable. This is a JavaScript array of objects. Each item you want to highlight needs: title, description, and URL.

The sample design has 4, but the number you include is up to you.

```javascript
const projectList = [
  {
    title: "title1", 
    description: "Sample description for collaboration to create a beginner-friendly....",
    url: "https://abc.com",
  },
  {
    title: "title2",
    description: "Sample description for contributed sketch note imagery to accompany...",
    url: "https://xyz.com",
  },
  {
    title: "title3",
    description: "Sample description for created from Microsoft's resume workshop...",
    url: "https://bcd.com",
  },
  {
    title: "title4",
    description: "Sample description for video interview to explain when to use GitHub.dev...",
    url: "https://pqr.com",
  },
];

```

<br/>

## 🏃 Deploy your web application
Now that you have edited your template, it's time to deploy it to Github Pages for free. Deploying it makes it available to other people around the world.

### GitHub Pages

GitHub Pages allows you to host websites directly from your GitHub repository. This project is already set up for you to get your portfolio deployed to GitHub pages with minimal steps.

With your project open in Codespaces:

1. Open `package.json` and update the following values:
    1. **homepage**: set to `http://{github-username}.github.io/{repo-name}`, replace `{github-username}` with your GitHub username and `{repo-name}` `with MLSA-Workshop-1`.
    1. **build-gh**: replace `{github-username}` with your GitHub username and `{repo-name}` with `MLSA-Workshop-1`.
1. Commit and push those changes to `package.json` to your GitHub remote repo. To do this, open a new terminal and type in these commands:
```
git add .
git commit -m "My first portfolio, all done!"
git push origin main
```
3. Run `npm run deploy` on the same terminal after the previous commands have finished executing. This will first run the pre-deploy script to build the project, followed by the deploy script that will push those bundled files to a new branch on your repo (gh-pages) that will be used for you GitHub Pages site.
4. When completed, within your repo, go to Settings and Pages. There you will see that a page has been set up to for you against the gh-pages branch, and you should see the URL (that should match the “homepage” value you set in package.json)

<br />

<!-- ## 🏆 Customizing with Copilot 

Below are 4 additional ways you can continue to customize your Codespace and portfolio site. We'll show you how to use Copilot to make suggestions for faster development, and help you learn more HTML, CSS and JavaScript along the way.

  1. [Customize your Codespace](#1-customize-your-codespace)
  1. [Update to smooth scroll to a section](#2-update-to-smooth-scroll-to-a-section)
  1. [Animate the desk photo](#3-animate-desk-photo)
  1. [Add a new section](#4-add-a-new-section)

> 👋 Getting Copilot access
>
> If you don't yet have Copilot access, you can [request it here](https://github.com/login?return_to=%2fgithub-copilot%2fsignup). If you are a student, you can get Copilot for **FREE** [following these instructions](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-setting-up-github-student-and-github-copilot-as-an/ba-p/3736279?WT.mc_id=academic-0000-sagibbon).
>
> To ensure that Copilot is running correctly, navigate to the extension tab in your Codespace and check the status of the Copilot extension. If the status is inactive, recreate the Codespace, and enable the extension to ensure that it is activated.

### 1. Customize your Codespace

Your environment comes with preinstalled extensions. You can change which extensions your Codespaces environment starts with, here's how:

1. Open file _.devcontainer/devcontainer.json_ and locate the following JSON element **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "gitHub.copilot",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Let's add the `indent-rainbow` extension. To do this, go to the **extensions** list and add:

   ```json
   "oderwat.indent-rainbow" 
   ```
  
   What you did above was to add the unique identifier of an extension of the [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79839-sagibbon). This will let Codespaces know that this extension should be pre-installed upon startup.

To find the unique identifier of an extension:

* Navigate to the extension's web page, like so [marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79839-sagibbon)
* Locate the _Unique Identifier_ field under **More info** section on your right side.

-------
⭐ COPILOT BONUS ⭐ 


In `devcontainer.json`, go to the following line in the `settings` values: `"emmet.triggerExpansionOnTab": true`. Add a comma at the end of the line and press enter. See what other settings Copilot recommeneds and if they'd help you in your Codespace. 

   
> 💡 Learn more on how to [Personalize Your GitHub Codespace](https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

<br/>

### 2. Update to smooth scroll to a section

In your site header you have links to each section below. Click one of these links and watch it scroll the page to that section. Not really a scroll, right?

Let's make this a better user experience by slowing that down so the user has a sense of what is happening, and where they are navigating to on the page. 

1. Open `styles.css`, which is the stylesheet for your portfolio application. We need to add a style for `html`. If you look, you'll see right now `html` and `body` styles are being set together, with no style set for `scroll-behavior`. Let's give Copilot a prompt to add this for us. 

1. Below the `html` and `body` styling prompt Copilot with a comment of: 
`/* add a smooth scroll */`

1. Copilot will then suggest the CSS below:
    ```css
    html {
      scroll-behavior: smooth;
    }
    ```
1. Press the tab key to accept the suggestion. (_Note: If you don't see this exact suggestion from Copilot, continue typing it to get the suggestion to appear._)

Your site should already be running in your Codespace, and the change will reload onto the page automatically. Click a link in the top header to see the smooth scroll in action.

<br/>

### 3. Animate desk photo

Animations are a way you can easily add some motion to elements on your page to increase user interactivity and highlight items you want to make sure they notice. Let's animate the desk photo in the portfolio section. 

1. Open your site's stylesheet, `styles.css` within your Codespace. Using Copilot, at the bottom of your `styles.css` prompt Copilot with the following comment: 
    ```css
    /* add a slide in animation */
    ```

    It should then suggest the following animation sequence for you. Press the tab key to accept, or continue to type until Copilot completes suggestions, and you have your animation ready to use.
    ```css
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    ``` 
1. With the animation sequenece defined, we can now tell our desk photo to animate itself with our new `slideIn` animation sequence. Open `Portfolio.jsx` and locate the `img` tag. You will see it utilizes inline CSS to set it's styling. Within it's style definition add the following:
    ```css
    animation: "1s ease-out 0s 1 slideIn";
    ```

    Your image tag should look something like:
    ```html
    <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }} />
    ```

Your site should already be running in your Codespace, and the change will reload onto the page automatically. Scroll up and down the page and watch your desk photo slide onto the page.


-------
⭐ COPILOT BONUS ⭐ 

Use Copilot to help you animate the scroll down arrow in your `Home` component to bounce up and down on your page. 

_Hint_: In your `styles.css` file, use comments to start to tell Copilot what you want to do. See what is suggests, adjust your prompts, and see how it guides you to get your arrow to bounce. 

-------

<br/>

### 4. Add a new section

We started you off with a few basic sections for your portfolio site, but you have creative freedom to make it your own and add new sections relevant to what you want on your site.

For an example, let's add an education section to your portfolio site. 

1. Create a new component for the section within the `Components` folder. Add a new file called `Education.jsx`.

1. Let's have Copilot help get us started. Instead of prompting with a comment, start your `Education.jsx` file with:
    ```javascript
    import React from "react";
    ```

    As you start typing it will pick up what you are doing and may offer an autocomplete of that line.

1. Press `enter` after the import line to have Copilot suggest code to create your `Education` component. Press `tab` to accept the solution or `crtl` + `enter` to view all Copilot suggestins and select the one that works for you. 

    At minimum, you need an `const` defined and the `Education` component exported (example below). The rest is up to you. Experiment with Copilot, nudging it along with what you'd like it to build out. 
    ```javascript
    import React from "react";
    
    const Education = () => {
        return(
            <section className="light" id="education">
                <h2>Education</h2>
            </section>
        )
    }
    
    export default Education;
    ```
3. In `App.jsx` import your new `Education` component at the top by adding the following, and watch as Copilot starts to see what you are doing and give you auto-complete suggestions:
    ```javascript
    import Education from "./Components/Education";
    ```
4. Now add the `Education` component by going to a new line where you want it rendered. Watch Copilot already know you want to render the `Education` component. It should suggest the following that you can accept, and will render your new component:
    ```javascript
    <Education />
    ```

In your Codespace, your portfolio application should be running and will reload your site with the changes. 

-------
⭐ COPILOT BONUS ⭐ 

Now that you are familiar how Copilot can not only help you code faster, but give you suggestions to save you time looking up solutions.

Explore how you can use Copilot to help you:
* add Education to your top navigation
* build education details by prompting it (_Hint_: add the comment of "grid of 4 education cells") 
-------

<br />

## 📚 Resources

* [GitHub Codespaces docs overview](https://docs.github.com/codespaces/overview)
* [GitHub Codespaces guides](https://docs.github.com/en/codespaces/guides)
* [GitHub Copilot docs](https://docs.github.com/en/copilot)
* [Use dev containers locally with VS Code and Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Web Development for Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
* [Get started with React](https://learn.microsoft.com/en-us/training/modules/react-get-started/?WT.mc_id=academic-79839-sagibbon)

> #### Codespaces Browser App
>
> If you are using Edge or Chrome you will see an option to install the Codespaces app when you launch your Codespace. The Codespaces app lets you launch your Codespace within the app so you can work outside of the browser.  Look for the app icon and install pop-up to try it out.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Web application started on port 1234" style="width: 800px;"/>

<br />

## 🔎 Found an issue or have an idea for improvement? 
Help us make this template repository better by [letting us know and opening an issue!](/../../issues/new). -->
