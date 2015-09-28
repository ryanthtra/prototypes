# Prototype - CSS Design & Layout 1, Box Model, margin, padding, border, and dimensions

Expanding on your understanding of CSS layouts and how they pertain to web page design. This prototype 
is based on the information that you obtained through the following resources (<b>If you haven't gone through these 
then please do so now</b>).

- Readings
    - CSS Box Model - <a href="http://www.w3schools.com/css/css_boxmodel.asp" target="_blank">Link</a>
    - CSS Margins- <a href="http://www.w3schools.com/css/css_margin.asp" target="_blank">Link</a>
    - CSS Padding - <a href="http://www.w3schools.com/css/css_padding.asp" target="_blank">Link</a>
    - CSS Dimensions - <a href="http://www.w3schools.com/css/css_dimension.asp" target="_blank">Link</a>
- Presentations
    - 6. CSS Design & Layout 1
        - <a href="https://drive.google.com/open?id=0B7eOl4joefDueXdic3dWekhXdWc" target="_blank">Slides Link</a>
        - <a href="https:https://www.youtube.com/watch?v=9xixJDx7pWo" target="_blank">Video Link (covers both)</a>
- Projects
    - This project will help build towards the MBoutique projects

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

> `git checkout -b css_design_layout_1`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "css_design_layout_1" is the branch name.

## Coding Instructions

### Feature Set 1

> - Make a file called example.html
    - add an internal CSS stylesheet
    - in it, do the following
    - make a div, give it a class of 'feature_set_1_1'
        - make a set of 3 divs inside the above div, sitting side by side, that together take up 75% of the width of the body
        - add appropriate ids or classes to perform the following operations:
            - put 5% of space between the 1st and 2nd div via any method you wish
            - put 5% of space between the 2nd and 3rd div without further altering the 2nd div
    - make another div, give it a class of 'feature_set_1_2'
        - make a set of 3 divs inside the feature_set_1_2, each with 25vw width
        - add borders to all 3 divs with 1 css statement, without affected any other div in this example
        - add padding top and bottom to the first div with 1 CSS statement
        - add padding top and right to the second div with 1 CSS statement
        - using the dev tools inspector, add padding to the 3rd div in any combination, as long as each side has different padding.
            - copy the padding to your internal style sheet
    - make another div, give it a class of 'feature_set_1_3'
        - give it 3 divs, give each 100pixels of width
        - give the first 25% height
        - give the second 25 vh height
        - give the third another form of height beside pixel, %, or viewport height.
        

### Feature Set 2 (Layout 2) 

> - create a file called nav.html
    - create an internal style sheet inside nav.html
    - add a <nav> element and closing tag, put the remaining code from this featureset inside the nav element
    - make a UL / LI element construct 
        - with the following hyperlinks (none of these files exist, don't worry)
            - home : links to home.html 
            - about us : links to about_us.html
            - our menu : links to our_menu.html
            - contact us : links to contact_us.html
        - remove the bullet points
        - add a border with appropriate spacing around the menu items
        - add padding to space the border from the words
        - capitalize the text within the menu WITHOUT changing the text in your element directly
        - add margin sufficient to space the menu items out relatively evenly across the page
        - resize your page.  What happens?  Tweak this till it works correctly at most sizes.
            - have you tried making the font size depend on the page size?  This might help.  Explore!
        
        
### Feature Set 3 (Layout 3) 

> - create a file called gallery.html
    - add an internal style sheet
    - add 5 photos that feature yourself in them.  If you are a complete recluse, use any photos.  
    - add css to your stylesheet that allows all 5 photos to exist on the same line, as well as margin/padding/border (as you wish) to space them out from one another
        - if resizing the photos is required, make sure they maintain their previous aspect ratio
    - have each photo link to the full size photo directly.  Should open via a hyperlink.  Only clicking the photo should open this link.


## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "css_design_layout_1 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin css_design_layout_1`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>css_design_layout_1</b>

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

>> 1. `base fork: Learning-Fuze/prototypes`
>>   1. For all prototypes this will always remain the same
>> 1. `base: C#_userName`
>>   1. Here you will select the option that matches your username
>>   1. If you can not locate an option that has your username, contact an instructor
>> 1. `head fork: [your_user_name]/prototypes`
>>   1. Here you will select the option that matches your username / prototypes
>>   1. If you can not locate an option that has your username / prototypes, contact an instructor
>> 1. `compare: css_design_layout_1`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>css_design_layout_1 - [you name first & last 
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
