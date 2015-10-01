#Prototype - HTML Forms
- Readings
    - HTML Forms - <a href="http://www.w3schools.com/html/html_forms.asp" target="_blank">Link</a>
    - HTML Input Types - <a href="http://www.w3schools.com/html/html_form_input_types.asp" target="_blank">Link</a>
- Presentations
    - HTML Forms and Inputs
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuVmRORkljSDVGTUk/views" target="_blank">Slides Link</a>
    - HTML Forms and Form Elements Video: 
        - <a href="https://www.youtube.com/watch?v=R6NGGRiU7nEs" target="_blank">Video Link</a>

## Code Setup Details

#####1. Open PHPStorm

#####2. Navigate to prototypes

> Insert this command in the terminal tab

> `cd prototypes` & press enter

> - this changes the directory to the prototypes folder
> - If you get an error with the above command its probably because you are already within the correct directory or not in the lfz directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git pull https://github.com/Learning-Fuze/prototypes.git` & press enter
> - The command above downloads the newly posted prototypes and saves them to your local machine

> `git checkout -b html_forms`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_forms" is the branch name.

#Coding Instructions

##Feature Set 1:

>(The following feature set is intentionally vague to encourage subject exploration)
###Create the following:
>
> - form_1.html (this is where we will create our feature sets)
#### Unstyled Text Inputs x 2
>
> - style one with background color
> - alternate font
> - border color
> - drop shadow
>
#### Textarea x 1
>
#### Group of 3 radio inputs
>
> - All radio inputs in the same group
> - Each radio input should represent a personal favorite food
> - Your overall favorite food should be selected by default (*hint* you may need to google search this)
> - When the input text is clicked, the associated radio input should be selected
>
#### Group of 4 checkboxes
>
> - Each checkbox is to represent your favorite GAMES
> - Your least favorite game will be the 4th (or I don't play games, if you don't play games)
> - The 4th game checkbox should be DISABLED: (*hint* you may need to google search this)
>
#### Select menu including: 
>
> - 4 select options
> - each option a favorite movie
> - menu is to show multiple options at once (*hint* you may need to google search this)
>
#### Submit button x 1
>All form elements must be inside a form tag
>Form must be submittable: 
>action 
>method
>the form should send its data to:
>http://learningfuze.com/echo.php (*hint* you may need to google search this)
>
>Verify that the form data is reflected in the echo.php results
>*note* submitting the form will leave your current page.

##Feature Set 2: 

>(The following feature set is intentionally vague to encourage subject exploration)
#### Create a new html file called form2.html. In it  Duplicate the following contact form:
>
> <img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_forms/form3.png" alt="Form 3 layout">

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_forms - Your Name"`
> - Your Name should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_forms`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_forms</b>

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

> 1. `base fork: Learning-Fuze/prototypes`
>   1. For all prototypes this will always remain the same
> 1. `base: C#_userName`
>   1. Here you will select the option that matches your username
>   1. If you can not locate an option that has your username, contact an instructor
> 1. `head fork: [your_user_name]/prototypes`
>   1. Here you will select the option that matches your username / prototypes
>   1. If you can not locate an option that has your username / prototypes, contact an instructor
> 1. `compare: html_forms`
>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>   1. This will usually be the same as the name of the prototype
> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_forms - [you name first & last 
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

    
