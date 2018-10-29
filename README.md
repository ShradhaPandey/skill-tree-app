# skill-tree-app ANGULAR 7
  
1. The project name is “skill-tree-app”, and the project has been created using following tools:
• Angular (version 7)
• node.js (version 10)
• Bootstrap css (version 3)
• Visual Studio Code IDE
2. The project consists of (navigation header, Maze tab, Warrior tab)
A header, through which user can navigate through different tabs, on home page “Maze” tree has been displayed.
If user clicks on “Warrior” tab on header, he/she will be redirected to the screen where “Warrior” tree has been displayed.
3. Each tree has following functionality, which is shown and updated dynamically by virtue of Angular!
• Each node of the tree has three properties: name, isLocked, canBeUnlocked
• Name: as given in the test,
• “isLocked”: The Property is “true” by default, because each node is locked at the
beginning, the node can be unlocked by clicking on the “unlock” button on that node
• “unlock” button:  Once the node is unlocked, the property “isLocked”
changes to “false”.
• “canBeUnlocked” property of a node is true if all previously linked nodes are unlocked
and this node is still locked.


4. At the start, all the nodes of the skill tree, with their names are displayed.
• User can click on the name of any node, to display the details of the node. Node details contain name, isLocked, canBeUnlocked and an “unlock” button.
• The “unlock” button remains disabled when the node cannot be unlocked (i.e either all the previous nodes linked to the node are not unlocked or the node has been unlocked already)
5. The styling of different nodes change according to their state:
• RED: node is locked and cannot be unlocked. ( isLocked && !canBeUnlocked )
• YELLOW: node is locked and can be unlocked. ( isLocked && canBeUnlocked )
• GREEN: node is unlocked already and thus cannot be unlocked. ( !isLocked &&
!canBeUnlocked )

6. screenshots of working project: https://github.com/ShradhaPandey/skill-tree-app/issues/1#issue-375043141
7. screenshot of the skill trees to be implented: https://github.com/ShradhaPandey/skill-tree-app/issues/2#issue-375045027
