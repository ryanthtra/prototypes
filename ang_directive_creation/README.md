**IMPORTANT NOTE** Do a find and replace for `branch_name` To add the prototypes branch name to all the appropriate places throughout readme **Del this line**

# Angular - Directive Creation

This prototype will build off of the previous Angular prototypes and introduce you to building custom directives

- Presentation(s)
    - Angular - Directives Creation
        - <a href="[URL]" target="_blank">Slides Link</a>
- Video(s)
    - [Name of related videos]
        - <a href="[URL]" target="_blank">Video Link</a>
- Projects
    - This prototype shows an alternate beginning to the Tic-Tac-Toe application
    
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

> `git checkout -b branch_name`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "branch_name" is the branch name.

## Coding Instructions

#### Getting Started

>1. The following files are included in the `ang_directives_creation` folder
    1. example-design.png
        - An image file to display a posible layout for the Tic-Tac-Toe game
    1. game-board-template.html
        - File to hold the HTML for the game board
    1. index.html
        - The main file that will display the Tic-Tac-Toe game
    1. info-bar-template.html
        - File to hold the HTML for the status bar
    1. style.css
        - holds the minimum styling for the Tic-Tac-Toe game
1. **DO NOT** Edit this README file

#### Feature Set 1 - Make The Board

>1. In the `script.js` file do the following:
    1. Create a directive to display the game board
        1. Restrict it to only work as an element
        1. Use the template loacted in `game-board-template.html` ... It is empty right now
        1. Add a controller to your directive
            1. Inject the `boardServ` service into your controller
            1. Create an array in your controller that will hold all the board data
                1. call `boardServ.buildBoardArr();` to populate your array with the appropriate data
        1. Create a controller alias for your controller. I used 'gc' for game controller
1. In the `game-board-template.html` file do the following
    1. Create a div that has the class of `board-container` and `container`
        1. Within that div do the following:
            1. Create a div with the class of row and use `ng-repeat` to loop through the board data
                1. Within the row div create another div and use `ng-repeat` to loop through the properties from each object in the array above
                    1. Set the following properties on the new div:
                        1. Set `id` = to the id property
                        1. set `class` = to the class property
                        1. set `style` = to the style property
                    1. **EXAMPLE:**
                        1. ```HTML    
                            <div class="row" ng-repeat="board in gc.boardInfo">
                                <div ng-repeat="info in board" id="{{ info.id }}" class="{{info.class}}" style="{{ info.style }}"></div>
                            </div>
                           ```
1. Add your new directive to the `index.html` to view the board
1. Run your code
    1. Do you see a standard 3x3 Tic-Tac-Toe board displayed?
        1. **YES** - Move to feature set 2
        1. **NO** - Re-read the instuctions and ask an instructor if necessary.
        
#### Feature Set 2 - Add Some Info

>1. Using Bootstrap or just plain css:
    1. Create an info 'bar' that displays the games name, a new game button, a reset all button, X wins and O wins
        1. None of this needs to be functional yet
    1. Add the necessary HTML to the `info-bar-template.html` file
1. Create a directive that utilizes the `info-bar-template.html` file
1. Add your new directive to the `index.html` file
1. Here is an example of the possible design:
    1. <img src="" alt"Image of a possible layout for the tic tac toe game"

## After Coding Details

##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "branch_name - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin branch_name`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>branch_name</b>

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
>  1. `compare: branch_name`
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
>   1. If you set the commit message above you should get <b>branch_name - [your first & last 
name]</b> already pre-populated in the Title field
>   1. If there is a different title pre-populated, change the title to match the correct format:
>      1. <b>branch_name - [your first and last name]</b>
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