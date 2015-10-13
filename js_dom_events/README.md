# Javascript - DOM Event Handeling

Building from previous prototypes this prototype will introduce you to basic event handlers in JavaScript

- Presentations
    - JS Comparisons and Conditionals
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuQVRUbjFpMlRlOWs/view" target="_blank">Slides Link</a>
        - <a href="#" target="_blank">Video Coming Soon</a>
- Projects
    - This project will help build towards the Memory Match project, as well as be a foundation for general
    programming knowledge that will be used in all future projects.

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

> `git checkout -b js_dom_events`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "js_dom_events" is the branch name.

## Coding Instructions

#### Getting Started

>1. Make an index.html inside the `js_dom_events` folder
1. Create a basic HTML DOM structure
	- DOCTYPE tag
	- HTML tag
	- head tag
	- body tag
1. **DO NOT** edit this README file

#### Feature Set 1 - Using the `onclick` Attribute

>1. Inside your body tags create a `button` it can say whatever you like
	- Inside your opening `button` tag add an `onclick` attribute
	- Set the value of `onclick` to a `console.log()` add a message to be logged out
	- Example Message: `"My button has been clicked"`
1. Now add a `h1` tag, it can also say whatever you would like
	- Inside your opening `h1` tag add an `onclick` attribute
	- Set the value of `onclick` to a `console.log()` add a message to be logged out
	- Example Message: `"My header has been clicked"`

>**Note** - Make sure to create a unique message for each `onclick` event

>Open your page in your browser (open your console)

>- Try clicking your button. What happens in the console?
- Try clicking your header. What happens in the console?
- Try clicking anywhere on the page. What happens in your console?

#### Feature Set 2 - Using the `onmouseover` Attribute

>1. Add an `h2` tag with any text you want
1. In your opening `h2` tag add an `onmouseover` attribute
	- Set the value of `onmouseover` to `console.log()` add a message to be logged out
	- Example message: `"You hovered over my h2 element"`

>Save your changes,<br> 
Refresh your page in the browser

>Hover over your `h2` element. What happened in the console?

#### Feature Set 3 - Using the `onload` Attribute

>1. In your opening `body` tag  add an `onload` attribute
	- Set the value of `onload` to a `console.log()` add a message to be logged out
	- Example Message: `"Body loaded"`

>**Reminder** - Use a unique and identifiable messages for your `console.log()`s

>Save your changes, <br>
Refresh your page in the browser

>Did you see your load message in the console?

#### Feature Set 4 - More `onclick` Fun

>1. Create a `p` tag, write a short sentence
1. Choose a word from your sentence and surround it with `<em></em>` tags
	- Example Message: `<p>This is my <em>sentence</em></p>`
1. Inside your opening `em` tag add an `onclick` attribute
1. Set the value of `onclick` to a `console.log()` add a message to be logged out
	- Example Message: `"You have clicked on the word sentence"`
1. Add an `onclick` attribute to your opening `body` tag
	- Set the value of `onclick` to `console.log()` with a message of your choosing
	- Example Message: `"Body has been clicked"`

>Save your changes, <br>
Refresh your page in the browser

>-Try clicking on your *emphasized* word. What happens in your console?<br>
-Try clicking anywhere on the page. What happens in your console?  

>Notice the differences between where and how `onclick` works verses how `onload` works

>**Note** `onclick` can be used in most html tags where as `onload` is used in the `body` tag a wont function properly in other html elements.

## Advanced Topic

><a href="http://javascript.info/tutorial/bubbling-and-capturing" target="_blank">Click Here</a> For some advanced information on event bubbling and capturing

## After Coding Details

##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "js_dom_events - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin js_dom_events`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>js_dom_events</b>

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
>  1. `compare: js_dom_events`
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
>   1. If you set the commit message above you should get get <b>js_dom_events - [you name first & last 
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