# BlogsiteFrontend [![Azure Static Web Apps CI/CD](https://github.com/llNovall/BlogsiteFrontend/actions/workflows/azure-static-web-apps-mango-desert-0fc4f8b03.yml/badge.svg)](https://github.com/llNovall/BlogsiteFrontend/actions/workflows/azure-static-web-apps-mango-desert-0fc4f8b03.yml)
This website is written in angular which uses API written in .Net. Please note that the API will require 1-2 minutes to warm-up since it is hosted on free tier due to cost.

This site is temporarily hosted at [here](https://mango-desert-0fc4f8b03.4.azurestaticapps.net/).

## Preview Images

1. Homepage

![Screenshot of homepage-part1.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/homepage1.png)
![Screenshot of homepage-part2.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/homepage2.png)

2. Search Page

![Screenshot of search page.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/search.png)

3. Projects Page

![Screenshot of projects page.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/project.png)

4. Blog Page

![Screenshot of blog page-part1.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/blogpage1.png)
![Screenshot of blog page-part2.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/blogpage2.png)

5. Contact Page

![Screenshot of contact page.](https://novusstorageaccount.blob.core.windows.net/github-blogrepo/blogsite-updated/contact.png)



## How to run
1. Download the source code

    Use the commend below to download the source code.
```
git clone https://github.com/llNovall/BlogsiteFrontend.git
```
2. Install dependencies

    Go to the source code folder and open a terminal. Use the command below to install the dependencies.
```
npm install
```
3. Run the app on dev server

    Use the commmand below to run the app on local dev server at `http://localhost:4200/`.
```
ng serve
```  

This will run the app but without the API for the datas. This project uses the project in this [repo](https://github.com/llNovall/Blogsite-API) for the data management. If you want the API, go to this [repo](https://github.com/llNovall/Blogsite-API) and get its source code. Run that project locally. Make sure to change the variables in the angular project's environment to the API project's link correctly.
