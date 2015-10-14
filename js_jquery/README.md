# Javascript - jQuery

Building from previous prototypes this prototype will introduce you to the jQuery library with some basic jQuery functionality.

- Presentations
    - JS jQuery
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuZVk2Q254QkJScG8/view" target="_blank">Slides Link</a>
        - <a href="#" target="_blank">Video Coming Soon</a>
- Projects
    - This prototype will help build towards the Memory Match project by demonstrating how to do a basic card flip/reveal using jQuery.

## Code Setup Details

#####1. Open PHPStorm

#####2. Navigate to prototypes

> Insert this command in the terminal tab

> `cd prototypes` & press enter

> - this changes the directory to the prototypes folder
> - If you get an error with the above command its probably because you are already within the correct directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git pull https://github.com/Learning-Fuze/prototypes.git` & press enter
> - The command above downloads the newly posted prototypes and saves them to your local machine

> `git checkout -b js_jquery`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "js_jquery" is the branch name.

## Coding Instructions

#### Getting Started

>1. `index.html` and `style.css` have already been created for you to use

>In the head tag you will see a `script` tag that looks like:
  - `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>`
  - This is where the jQuery library comes from

>To use jQuery in your JavaScript it must be called before any of your JavaScript

>Open the `index.html` file in your browser (open your console)

#### Feature Set 1 - From Red to Pink

>1. In your browser try clicking on the different divs
	- Don't forget to watch what happens in the console also
	- For now only `div1` and `div2` do anything
1. Review the code that is already included in your `index.html` file
1. On line 14 we are adding the "red" class that is predefined in the `style.css` file
	- Change the word "red" to "pink"
	- Save and Refresh your page
	- Notice the different background for `div1`
	- Update the `console.log()` on line 20 to reflect the new color of `div1`
>1. Click on `div2` a few times
	- Notice the color change and what is output to the console

#### Feature Set 2 - Time to try it on your own 

>1. Using jQuery add the class "card-back" to `div3` and `div4`
	- <a href="https://api.jquery.com/addclass/" target="_blank">Click Here</a> For an explanation and examples of the `.addClass()` method
1. Now using jQuery create a click handler for `div3`
	- Refer to `index.html` for an example (line 19)
	- Inside your click handler use the `.toggleClass()` method to change the class to "flag"
	- <a href="https://api.jquery.com/toggleclass/" target="_blank">Click Here</a> For an explanation and examples of the `.toggleClass()` method
1. Using jQuery create a click handler for `div4`
	- Refer to `index.html` for an example (line 19)
	- Inside your click handler use the `.toggleClass()` method to change the class to "path"
	- <a href="https://api.jquery.com/toggleclass/" target="_blank">Click Here</a> For an explanation and examples of the `.toggleClass()` method

>Now when you click on `div3` it should switch between the picture of the card back and a picture of the British flag. Also clicking on `div4` should change the picture between the card back and a picture of a nice path

## After Coding Details

##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "js_jquery - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin js_jquery`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>js_jquery</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your prototypes Repo in the browser
> - The link Should follow this format github.com / [your user name] / prototypes

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

>  1. `base fork: Learning-Fuze/prototypes`
>    1. For all prototypes this will always remain the same
>  1. `base: C#_userName`
>    1. Here you will select the option that matches your username
>    1. If you can not locate an option that has your username, contact an instructor
>  1. `head fork: [your_user_name]/prototypes`
>    1. Here you will select the option that matches your username / prototypes
>    1. If you can not locate an option that has your username / prototypes, contact an instructor
>  1. `compare: js_jquery`
>    1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>    1. This will usually be the same as the name of the prototype
>  1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>    1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>    1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by 
instructors at start)
>  1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>js_jquery - [you name first & last 
name]</b> already pre populated in the Title field
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Collaborate on feedback

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Students should make modifications to there code based on the instructors feedback
> - Instructors will be giving an initial assessment based on the pull request. <b>Any additional collaboration after the instructor has been feedback will be on a requested basis only.</b>

##### 6. Pull Request Closed
> - In the LearningFuze workflow the pull requests are closed to indicate assessment has been given to the student and recorded.