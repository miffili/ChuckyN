# Chuck-o-mat

After learning & doing a few tutorials/courses on React for a few days, I wanted to build a fun web app, to not only work with components, but also to see, how to fetch data from a third-party database via API, how to display it and how to add different details with React.

## The plan

Originally, I wanted to use another database, but I switched mid way through, because I didn't liked the content the initial chosen database provided. With that, I needed to adapt the functionality a bit.

**user stories**

The user:  
* sees a simple interface on load  
* can hit a button to get random Chuck Norris facts  
* can tweet a chosen Chuck Norris fact  
* can set a few different settings to tweak the results  

## The work process

1. set up react-app using `create-react-app`  
2. deploy with simple "nothing to see"-interface  
![Dancin' Chuck Norris](https://media.giphy.com/media/9oIZogsRnw81FtHq4x/giphy.gif)  
3. set up interface with dummy components  
4. fetch data and display it in the Fact component   
5. sketch out component tree  
6. start from scratch  
    1. render simple UI with Chuck Norris portrait & "hit me" button  
    2. implement "hit me"-function & render hard coded Fact component  
    3. add Tweet function via Tweet Web Intent  
    4. fetch data from database & display within Fact component  
    5. fetch multiple random facts & display Facts with `.map()`  
    6. add counter, so user can set the number of fetched facts  
    7. add settings, where the user can change the name used in the fact, limit the results to "nerdy only" facts  
    8. add buttons at the bottom to fetch more random facts and to clear the ui  
    9. style everything with external stylesheet (plain CSS)

## What I learned in the process

* in general getting comfortable with using React & JSX  
* how to split the user interface into different React components, as well as refactoring code into separate components  
* how to fetch data using the Fetch-API  
* how to conditionally display components  

## What I still want to do

- [ ] make settings form responsive  
- [x] refactor code, maybe the settings form in a separate component
- [ ] implement Typechecking with PropTypes  
- [ ] smooth out the transition of the settings menu when opened/closed → `CSSTransition`/`TransitionGroup`  

[13. April 2018]

-----------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#### Sources/ Credits

* Facts fetched from [ICNDb.com](http://www.icndb.com/api/)

* Dancin' Chuck Gif [jesgrad07 on DeviantArt](https://jesgrad07.deviantart.com/art/Chuck-Norris-Dancin-186138685)  
* [Chuck Norris portrait](https://static.wixstatic.com/media/2cd43b_6a369bda0d874ace8e00e08838ce16a0~mv2.png)  
* Favicon made by Freepik from [www.flaticon.com](www.flaticon.com) (licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/))  
* Background Picture by [Jean-Pierre Brungs via Unsplash](https://unsplash.com/@johnnyabroad)
