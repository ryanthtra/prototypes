# Prototype - CSS Selectors

### CSS Selectors, Group, Descendant, Content, State, Link Selectors, Cascading and Specificity

Expanding on your understanding of CSS selectors and how they can be used to target elements or groups of elements to
 apply style, aiding in the design of a webpage. This prototype is based on the information that you obtained through
  the following resources (<b>If you haven't gone through these then please do so now</b>).

- Readings
    - CSS Selectors - <a href="http://www.w3schools.com/css/css_selectors.asp" target="_blank">Link</a>
    - Group, Descendant, <br> 
        Content, State, <br>
        Link Selectors - <a href="http://www.w3schools.com/cssref/css_selectors.asp" target="_blank">Link</a>
    - Cascading & Specificity - <a href="https://css-tricks.com/specifics-on-css-specificity/" target="_blank">Link</a>
- Presentations
    - CSS Selectors
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDub3N1NWE3VmFxakE/view" target="_blank">Slides Link</a>
        - <a href="https:///www.youtube.com/watch?v=456PdCCQX3c" target="_blank">Video Link (covers all)</a>
- Projects
    - This prototype is a general prototype and will help strengthen your skills in CSS selectors, helping in the 
    design of all future and present projects including, <a href="https://github.com/Learning-Fuze/portfolio" target="_blank">Portfolio</a>, <a href="https://github.com/Learning-Fuze/mboutique" target="_blank">mBoutique</a> and coming soon **Memory Match**.

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

> `git checkout -b css_selectors`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "css_selectors" is the branch name.

## Coding Instructions

### A Note for this prototype

> - You are **NOT** required to do both the easy and hard Feature sets
> - Choose one or the other
> - If you choose to do both, only the **Hard** version will be reviewed
    - Review of the easy version will require students spending accumulated **additional** instructor time, if any
> - Choose the one you feel the most comfortable tackling
> - Looks can be deceiving, although the harder one might not look much tougher ... It is!

### Feature Set 1 - Easy CSS Positioning (Well at least easier)

> 1. Using the HTML provided in `easy.html` recreate the image below
    1. **DO NOT** change the HTML in **ANY** way. Don't touch even one letter!
    1. This will require you to use element selectors, group selectors and pseudo CSS selectors
> 1. Create a css style sheet named `style-easy.css`
    1. The link has already been added to the HTML so make sure to name it as shown
     
><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/css_selectors/CSS%20Selectors%20Easy.png" width="800px" alt="Contact an Instructor if you see this (easy-1)">
    
### Feature Set 1a - Body Size and Header

> 1. Give the body element a set (fixed) *height* and *width*
    - Height = 600px
    - Width = 1200px
    
> 1. Center the content of the header
> 1. Give the header element: 
    1. A border just on the bottom (about 3px thick)
    1. A background color (light blue)
    
> 1. For the ul that represents the navigation:
    1. Take away the bullet points
    1. Make sure it is in the center properly ... (padding maybe?)
    1. Make the list horizontal
    1. Using pseudo selectors
        1. Make the first and third list items light green
        1. Make the second and fourth green

### Feature Set 1b - Center Section

> 1. For The whole center section, center all the content
> 1. For the center section "Main Content - Square Divs"
    1. give the three divs the following dimensions:
        - Height = 80px
        - Width = 80px
    1. Give the divs the appropriate background color to match their text 
    1. Give the three divs a border with a radius and make it about 3px thick
    1. Position the divs as shown in the image above
    
> 1. For the center section "Main Content - Paragraphs"
    1. Change the font color of the three paragraphs to lavender
    1. Add a dark gray background color to the first and third paragraphs
        1. Add some top and bottom padding to the same paragraphs (about 4px)
    1. For the middle paragraph:
        1. Change the font color to white
        1. Change the back ground color to blue
            1. Make it so the background color only surrounds the text and doesn't reach across the page
        1. Add some padding to the top and bottom
        1. Increase the font size to about 22px
        
### Feature Set 1c - Footer

> 1. Center the content of the Footer
> 1. Change the footer background color to the same as the header
> 1. Add some extra padding on all sides to the footer (about 10px)
> 1. Make the h1 element dark blue
> 1. For the paragraph in the footer:
    1. Change the font color red
    1. Make the font **bold**
    1. Make the font size bigger ... let's say 18px
    1. Uderline the whole paragraph
    
> 1. That is it, your page should resemble the image above

### Feature Set 2 - Hard CSS Positioning (Well at least harder)

> 1. Using the HTML provided in `hard.html` recreate the image below
    1. **DO NOT** change the HTML in **ANY** way. Don't touch even one letter!
    1. This will require you to use element selectors, group selectors and pseudo CSS selectors
> 1. Create a css style sheet named `style-hard.css`
    1. The link has already been added to the HTML so make sure to name it as shown
    
> 1. There are no step by step instructions for this one, just try to match the images the best you can

> ---

><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/css_selectors/CSS%20Selectors%20Hard%201.png" width="800px" alt="Contact an Instructor if you see this (hard-1)">

> ---

### Notes For Hard 

1. **Note** in image two when you hover over "Menu Item 1" there is a drop down menu
1. The main menu and sub menu items also highlight with gray on hover

> ---

><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/css_selectors/CSS%20Selectors%20Hard%202.png" width="800px" alt="Contact an Instructor if you see this (hard-2)"> 

> ---

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "css_selectors [Easy or Hard] - Eric Johnson"`
> - Replace the square bracket section `[Easy or Hard]` with the one you completed... Easy or Hard
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin css_selectors`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>css_selectors</b>

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
>> 1. `compare: css_selectors`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>css_selectors [Easy or Hard] - [you name first & last 
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
