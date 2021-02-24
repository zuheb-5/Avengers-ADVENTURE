//background images
var bg1Img, battlefieldBackgroundMediumImg, fieryBackgroundMediumImg, insideBuildingBackgroundMediumImg, jungleBackgroundMediumImg, mountainRedBackgroundMediumImg, redBackgroundMediumImg, rockyBackgroundMediumImg, rockyStormyBackgroundMediumImg, skyscrapersBackgroundMediumImg, stormyNightBackgroundMediumImg;
//button images
var leftArrowImg, rightArrowImg, buttonImg;
//obstacle images
var arrowImg, bulletImg, boulderImg, fallenTree1Img, fallenTree2Img, fireball1Img, fireball2Img, lightning1Img, lightning2Img, portal1Img, portal2Img, portal3Img, wall1Img, wall2Img, wall3Img;
//slides images
var ironManDescription, scarletWitchDescription, hulkDescription, thorDescription, spidermanDescription, drStrangeDescription, blackWidowDescription, captainAmericaDescription, howToPlayImg, storyImg;
//iron man images
var ironManFlyAnimation, ironManHoverImg, ironManKickAnimation;
//captain america images
var captainAmericaPowerAnimation, captainAmericaRunAnimation;
//black widow images
var blackWidowKickImg, blackWidowRunAnimation;
//dr strange images
var drStrangeDoMagicImg, drStrangeWalkAnimation;
//hulk images
var hulkRunAnimation;
//scarlet witch images
var scarletWitchImg;
//spiderman images
var spidermanImg,spidermanSwingAnimation;
//thor images
var thorFlyingImg;
var keys = 0;
var term = 0;
var rand, distance;
//sprites
var rightArrow, leftArrow, person, descriptionsButton, nextButton, backButton, playButton, obstacle;
//sounds;
var clickSound, keySound;
//beginning gameState
var gameState = "start";

function preload () {

    //background images in order of appearance
    bg1Img = loadImage("images/bg1.jpg");
    battlefieldBackgroundMediumImg = loadImage("images/battlefield_background_medium.png");
    fieryBackgroundMediumImg = loadImage("images/fiery_background_medium.png");
    insideBuildingBackgroundMediumImg = loadImage("images/inside_building_background_medium.png");
    jungleBackgroundMediumImg = loadImage("images/jungle_background_medium.png");
    mountainRedBackgroundMediumImg = loadImage("images/mountain_red_background_medium.png");
    redBackgroundMediumImg = loadImage("images/red_background_medium.png");
    rockyBackgroundMediumImg = loadImage("images/rocky_background_medium.png");
    rockyStormyBackgroundMediumImg = loadImage("images/rocky_stormy_background_medium.png");
    skyscrapersBackgroundMediumImg = loadImage("images/skyscrapers_background_medium.png");
    stormyNightBackgroundMediumImg = loadImage("images/stormy_night_background_medium.png");
    endBg = loadImage("images/end_background.png");
    end2Bg = loadImage("images/end_2_background.png");
    winBg = loadImage("images/win_background.png");

    //button images
    leftArrowImg = loadImage("images/leftArrow.png");
    rightArrowImg = loadImage("images/rightArrow.png");
    buttonImg = loadImage("images/button.webp");

    //obstacles images
    rocketImg = loadImage("images/rocket.png");
    arrowImg = loadImage("images/arrow.png");
    bulletImg = loadImage("images/bullet.png");
    boulderImg = loadImage("images/boulder_1.png");
    fallenTree1Img = loadImage("images/fallen_tree_1.png");
    fallenTree2Img = loadImage("images/fallen_tree_2.png");
    fireball1Img = loadImage("images/fireball_1.png");
    fireball2Img = loadImage("images/fireball_2.png");
    lightning1Img = loadImage("images/lightning_1.png");
    lightning2Img = loadImage("images/lightning_2.png");
    portal1Img = loadImage("images/portal_1.png");
    portal2Img = loadImage("images/portal_2.png");
    portal3Img = loadImage("images/portal_3.png");
    stumpImg = loadImage("images/stump.png");
    wall1Img = loadImage("images/wall_1.png");
    wall2Img = loadImage("images/wall_2.png");
    wall3Img = loadImage("images/wall_3.png");
    keyImg = loadImage("images/key.png");
    
    //black widow images
    blackWidowKickImg = loadImage("images/black_widow_kick.png");
    blackWidowRunAnimation = loadAnimation("images/black_widow_run_1.png","images/black_widow_run_2.png");
    
    //captain america images
    captainAmericaPowerAnimation = loadAnimation("images/captain_america_power_1.png","images/captain_america_power_2.png","images/captain_america_power_3.png","images/captain_america_power_4.png","images/captain_america_power_5.png");
    captainAmericaRunAnimation = loadAnimation("images/captain_america_run_1.png","images/captain_america_run_2.png","images/captain_america_run_3.png","images/captain_america_run_4.png");
    
    //dr strange images
    drStrangeDoMagicImg = loadImage("images/dr_strange_do_magic.png");
    drStrangeWalkAnimation = loadAnimation("images/dr_strange_walk_1.png","images/dr_strange_walk_2.png","images/dr_strange_walk_3.png","images/dr_strange_walk_4.png","images/dr_strange_walk_5.png");
    
    //hulk images
    hulkRunAnimation = loadAnimation("images/hulk_run_1.png","images/hulk_run_2.png","images/hulk_run_3.png","images/hulk_run_4.png","images/hulk_run_5.png","images/hulk_run_6.png","images/hulk_run_7.png","images/hulk_run_8.png");
    hulkPunchImg = loadImage("images/hulk_punch.png");
    
    //iron man images
    ironManFlyAnimation = loadAnimation("images/iron_man_fly_1.png","images/iron_man_fly_2.png");
    ironManHoverImg = loadAnimation("images/iron_man_hover.png");
    ironManKickAnimation = loadAnimation("images/iron_man_kick_1.png","images/iron_man_kick_2.png","images/iron_man_kick_3.png","images/iron_man_kick_4.png","images/iron_man_kick_5.png");

    //scarlet witch images
    scarletWitchImg = loadImage("images/scarlet_witch.png");
    
    //spiderman images
    spidermanSwingAnimation = loadAnimation("images/spiderman_swing_1.png","images/spiderman_swing_2.png","images/spiderman_swing_3.png","images/spiderman_swing_4.png","images/spiderman_swing_5.png","images/spiderman_swing_6.png","images/spiderman_swing_7.png","images/spiderman_swing_8.png");
    
    //thor images
    thorFlyingImg = loadImage("images/thor_flying.png");

    //slides images
    storyImg = loadImage("images/story.png");
    howToPlayImg = loadImage("images/how_to_play.png");
    ironManDescription = loadImage("images/iron_man_description.png");
    scarletWitchDescription = loadImage("images/scarlet_witch_description.png");
    hulkDescription = loadImage("images/hulk_description.png");
    thorDescription = loadImage("images/thor_description.png");
    spidermanDescription = loadImage("images/spiderman_description.png");
    drStrangeDescription = loadImage("images/dr_strange_description.png");
    blackWidowDescription = loadImage("images/black_widow_description.png");
    captainAmericaDescription = loadImage("images/captain_america_description.png");

    //superhero buttons
    ironManSquareImg = loadImage("images/iron_man_square.jpg");
    scarletWitchSquareImg = loadImage("images/scarlet_witch_square.jpg");
    hulkSquareImg = loadImage("images/hulk_square.jpg");
    thorSquareImg = loadImage("images/thor_square.jpg");
    spidermanSquareImg = loadImage("images/spiderman_square.jpg");
    drStrangeSquareImg = loadImage("images/dr_strange_square.jpg");
    blackWidowSquareImg = loadImage("images/black_widow_square.jpg");
    captainAmericaSquareImg = loadImage("images/captain_america_square.png");

    //sounds
    clickSound = loadSound("sounds/click_sound.mp3");
    keySound = loadSound("sounds/key_sound.mp3");

}

function setup () {

    createCanvas(1400,800);

    rightArrow = createSprite(1250,650,100,50);
    rightArrow.addImage(rightArrowImg);
    rightArrow.scale = 0.4;

    leftArrow = createSprite(150,650,100,50);
    leftArrow.addImage(leftArrowImg);
    leftArrow.scale = 0.4;

    descriptionsButton = createSprite(705,735,100,60);
    descriptionsButton.addImage(buttonImg);
    descriptionsButton.scale = 0.3;

    nextButton = createSprite(705,760,100,60);
    nextButton.addImage(buttonImg);
    nextButton.scale = 0.3;

    backButton = createSprite(700,770);
    backButton.addImage(buttonImg);
    backButton.scale = 0.15;

    playButton = createSprite(705,660);
    playButton.addImage(buttonImg);
    playButton.scale = 0.5;

    person = createSprite(0,675,50,100);
    person.scale = 0.5;

    arrowsGroup = createGroup();
    keysGroup = createGroup();
    wallsGroup = createGroup();
    bulletsGroup = createGroup();
    portalsGroup = createGroup();
    fireballsGroup = createGroup();
    bouldersGroup = createGroup();
    treesGroup = createGroup();
    lightningGroup = createGroup();
    rocketsGroup = createGroup();
    stumpsGroup = createGroup();
    
    for(var i = 39000; i > 29500; i=i-600){
        topStump = createSprite(i,random(-30,30));
        topStump.addImage("stumpImg",stumpImg);
        topStump.scale = random(2.5,3);
        stumpsGroup.add(topStump);

        bottomStump = createSprite(i,random(770,830));
        bottomStump.addImage("stumpImg",stumpImg);
        bottomStump.scale = random(2.5,3);
        stumpsGroup.add(bottomStump);

        rand = Math.round(random(1,4));
        if(rand === 1){
            topStump.y = 0;
            bottomStump.y = 800;
        } else if (rand === 2){
            topStump.y = -100;
            bottomStump.y = 650;
        } else if (rand === 3){
            topStump.y = 70;
            bottomStump.y = 830;
        } else if (rand === 4){
            topStump.y = random(-30,30);
            bottomStump.y = random(770,830);
        }
    }

    for(var i = 81300; i > 75500; i=i-500){
        rocket = createSprite(i,random(50,650));
        rocket.addImage("rocketImg",rocketImg);
        rocket.scale = 0.2;
        rocketsGroup.add(rocket);
    }

    for(var i = 88000; i > 82500; i=i-450){
        lightning = createSprite(i,random(100,650));
        var rand = Math.round(random(1,2));
        if(rand === 1){
            lightning.addImage(lightning1Img);
        } else if (rand === 2){
            lightning.addImage(lightning2Img);
        }
        lightning.scale = 0.9;
        lightningGroup.add(lightning);
    }

    for(var i = 75000; i > 66500; i=i-600){
        tree = createSprite(i,random(550,700));
        var rand = Math.round(random(1,2));
        if(rand === 1){
            tree.addImage(fallenTree1Img);
        } else if (rand === 2){
            tree.addImage(fallenTree2Img);
        }
        tree.scale = 0.5;
        treesGroup.add(tree);
    }

    for(var i = 65000; i > 59500; i=i-650){
        boulder = createSprite(i,random(660,690));
        boulder.addImage(boulderImg);
        boulder.scale = 0.5;
        bouldersGroup.add(boulder);
    }

    for(var i = 59000; i > 50500; i=i-500){
        fireball = createSprite(i,random(50,750));
        var rand = Math.round(random(1,2));
        if(rand === 1){
            fireball.addImage(fireball1Img);
        } else if(rand === 2){
            fireball.addImage(fireball2Img);
        }
        fireball.scale = 0.5;
        fireballsGroup.add(fireball);
    }

    for(var i = 49000; i > 40500; i=i-500){
        portal = createSprite(i,random(200,700));
        var rand = Math.round(random(1,3));
        if(rand === 1){
            portal.addImage(portal1Img);
        } else if(rand === 2){
            portal.addImage(portal2Img);
        } else if(rand === 3){
            portal.addImage(portal3Img);
        }
        portal.scale = 0.5;
        portalsGroup.add(portal);
    }

    for(var i = 9000; i > 300; i=i-300){
        arrow = createSprite(i,random(100,750));
        arrow.addImage(arrowImg);
        arrow.scale = 0.5;
        arrowsGroup.add(arrow);
    }

    for(var i = 88300; i > 650; i=i-2000){
        key = createSprite(i,random(300,700));
        key.addImage(keyImg);
        key.scale = 0.1;
        keysGroup.add(key);
    }

    for(var i = 19000; i > 11000; i=i-550){
        wall = createSprite(i,random(300,600));
        var rand = Math.round(random(1,3));
        if(rand === 1){
            wall.addImage(wall1Img);
        } else if(rand === 2){
            wall.addImage(wall2Img);
        } else if(rand === 3){
            wall.addImage(wall3Img);
        }
        wall.scale = 0.7;
        wallsGroup.add(wall);
    }

    for(var i = 29000; i > 20600; i=i-200){
        bullet = createSprite(i,random(100,700));
        bullet.addImage(bulletImg);
        bullet.scale = 0.1;
        bulletsGroup.add(bullet);
    }

    ironManButton = createSprite(person.x-600,70);
    ironManButton.addImage(ironManSquareImg);
    ironManButton.scale = 0.3;

    captainAmericaButton = createSprite(person.x-480,70);
    captainAmericaButton.addImage(captainAmericaSquareImg);
    captainAmericaButton.scale = 0.35;

    hulkButton = createSprite(person.x-355,70);
    hulkButton.addImage(hulkSquareImg);
    hulkButton.scale = 0.08;

    drStrangeButton = createSprite(person.x-230,70);
    drStrangeButton.addImage(drStrangeSquareImg);
    drStrangeButton.scale = 0.215;

    blackWidowButton = createSprite(person.x-115,70);
    blackWidowButton.addImage(blackWidowSquareImg);
    blackWidowButton.scale = 0.32;

    thorButton = createSprite(person.x,70);
    thorButton.addImage(thorSquareImg);
    thorButton.scale = 0.15;

    scarletWitchButton = createSprite(person.x,70);
    scarletWitchButton.addImage(scarletWitchSquareImg);
    scarletWitchButton.scale = 0.105;

    spidermanButton = createSprite(person.x,70);
    spidermanButton.addImage(spidermanSquareImg);
    spidermanButton.scale = 0.17;
    
}

function draw(){

    background(24,39,61);
    
    if(gameState === "start"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        rightArrow.visible = true;
        leftArrow.visible = true;
        playButton.visible = true;
        
        nextButton.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        
        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;
        
        push();
        imageMode(CENTER);
        tint(255,100);
        image(bg1Img,700,400,1400,800);
        pop();
    
        if(mousePressedOver(leftArrow)){
            clickSound.play();
            gameState = "story";
        }

        if(mousePressedOver(rightArrow)){
            clickSound.play();
            gameState = "how";
        }

        if(mousePressedOver(playButton)){
            clickSound.play();
            gameState = "play";
        }

        drawSprites();

        textFont("Georgia");
        textSize(100);
        fill("silver");
        stroke(random(0,255),random(0,60),random(0,200));
        strokeWeight(15);
        text("AVENGER",450,250);
        text("ADVENTURE",375,400);
    
        textFont("Georgia");
        textSize(41);
        fill("green");
        stroke("darkgreen");
        strokeWeight(3);
        text("How to Play",1135,660);
        text("Flashback!",60,660);

        textFont("Georgia");
        textSize(70);
        fill(0,0,255);
        stroke("darkblue");
        strokeWeight(5);
        text("PLAY!",610,685);

    }

    if(gameState === "story"){

        background(storyImg);

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        backButton.visible = true;
        backButton.x = 700;
        backButton.y = 770;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        if(mousePressedOver(backButton)){
            clickSound.play();
            gameState = "start";
        }
        
        drawSprites();

        textFont("Georgia");
        textSize(25);
        fill(255);
        stroke(255);
        strokeWeight(2);
        text("Back",673,780);

    }

    if(gameState === "how"){

        background(howToPlayImg);

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        descriptionsButton.visible = true;
        backButton.visible = true;
        backButton.x = 70;
        backButton.y = 780;

        leftArrow.visible = false;
        rightArrow.visible = false;
        playButton.visible = false;
        
        person.visible = false;
        
        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        if(mousePressedOver(descriptionsButton)){
            clickSound.play();
            gameState = "ironMan";
        }

        if(mousePressedOver(backButton)){
            clickSound.play();
            gameState = "start";
        }
        
        drawSprites();

        textFont("Georgia");
        textSize(30);
        fill(255);
        noStroke();
        text("Learn More",630,740);
        textSize(25);
        text("Back",40,790);
        
    }
    
    if(gameState === "ironMan"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;
        
        image(ironManDescription,0,0,1400,800);

        if(keyIsDown(49)){
            clickSound.play();
            gameState = "scarletWitch";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 1 to continue",610,765);

    }

    if(gameState === "scarletWitch"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(scarletWitchDescription,0,0,1400,800);

        if(keyIsDown(50)){
            clickSound.play();
            gameState = "hulk";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 2 to continue",610,765);

    }

    if(gameState === "hulk"){
        
        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(hulkDescription,0,0,1400,800);

        if(keyIsDown(51)){
            clickSound.play();
            gameState = "spiderman";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 3 to continue",610,765);

    }

    if(gameState === "spiderman"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(spidermanDescription,0,0,1400,800);

        if(keyIsDown(52)){
            clickSound.play();
            gameState = "captainAmerica";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 4 to continue",610,765);

    }

    if(gameState === "spiderman"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(spidermanDescription,0,0,1400,800);

        if(keyIsDown(52)){
            clickSound.play();
            gameState = "captainAmerica";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 4 to continue",610,765);

    }

    if(gameState === "captainAmerica"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(captainAmericaDescription,0,0,1400,800);

        if(keyIsDown(53)){
            clickSound.play();
            gameState = "blackWidow";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 5 to continue",610,765);

    }

    if(gameState === "blackWidow"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(blackWidowDescription,0,0,1400,800);

        if(keyIsDown(54)){
            clickSound.play();
            gameState = "drStrange";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 6 to continue",610,765);

    }

    if(gameState === "drStrange"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(drStrangeDescription,0,0,1400,800);

        if(keyIsDown(55)){
            clickSound.play();
            gameState = "thor";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 7 to continue",610,765);

    }

    if(gameState === "thor"){

        arrowsGroup.setVisibleEach(false);
        keysGroup.setVisibleEach(false);

        nextButton.visible = true;

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        backButton.visible = false;
        playButton.visible = false;

        person.visible = false;

        captainAmericaButton.visible = false;
        ironManButton.visible = false;
        hulkButton.visible = false;
        drStrangeButton.visible = false;
        blackWidowButton.visible = false;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        image(thorDescription,0,0,1400,800);

        if(keyIsDown(56)){
            clickSound.play();
            gameState = "start";
        }

        drawSprites();

        textFont("Georgia");
        textSize(22.5);
        fill(255);
        noStroke();
        text("Press 8 to go home",610,765);

    }

    if(gameState === "play"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        person.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
        }

        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay";
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
        }

        camera.position.x = 0;
        
        image(battlefieldBackgroundMediumImg,-700,0,10000,800);

        drawSprites();

        textFont("Georgia");
        textSize(40);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Choose which superhero you want to begin as",-660,180);
        text("by clicking on their icon above!",-660,230);
        
    }

    if(gameState === "ironManPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
            person.y = 625;
        }

        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
            person.y = 625;
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay";
            person.y = 625;
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
            person.y = 625;
        }

        if(keyWentDown("f")){
            person.addAnimation("ironManFlyAnimation",ironManFlyAnimation);
            person.changeAnimation("ironManFlyAnimation");
        }

        if(keyWentDown("k")){

            person.addAnimation("ironManKickAnimation",ironManKickAnimation);
            person.changeAnimation("ironManKickAnimation");

            for(var i = 0; i < arrowsGroup.length; i++){
                if(arrowsGroup.get(i).x - person.x <= 300 && person.y - arrowsGroup.get(i).y < 150 && arrowsGroup.get(i).y - person.y < 150){
                    arrowsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < wallsGroup.length; i++){
                if(wallsGroup.get(i).x - person.x <= 350 && person.y - wallsGroup.get(i).y < 250 && wallsGroup.get(i).y - person.y < 250){
                    wallsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < treesGroup.length; i++){
                if(treesGroup.get(i).x - person.x <= 300 && person.y - treesGroup.get(i).y < 200 && treesGroup.get(i).y - person.y < 200){
                    treesGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < rocketsGroup.length; i++){
                if(rocketsGroup.get(i).x - person.x <= 320 && person.y - rocketsGroup.get(i).y < 170 && rocketsGroup.get(i).y - person.y < 170){
                    rocketsGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k") || keyWentUp("f")){
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
        }

        for(var i = 0; i < arrowsGroup.length; i++){
            if(arrowsGroup.get(i).isTouching(person) && person.animation !== ironManKickAnimation){
                gameState = "end";
                arrowsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < wallsGroup.length; i++){
            if(wallsGroup.get(i).isTouching(person) && person.animation !== ironManKickAnimation){
                gameState = "end";
                wallsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < treesGroup.length; i++){
            if(treesGroup.get(i).isTouching(person) && person.animation !== ironManKickAnimation){
                gameState = "end";
                treesGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < rocketsGroup.length; i++){
            if(rocketsGroup.get(i).isTouching(person) && person.animation !== ironManKickAnimation){
                gameState = "end";
                rocketsGroup.get(i).destroy();
            }
        }
        
        for(var i = 0; i < portalsGroup.length; i++){
            if(portalsGroup.isTouching(person)){
                gameState = "end";
                portalsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.isTouching(person)){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bouldersGroup.length; i++){
            if(bouldersGroup.isTouching(person)){
                gameState = "end";
                bouldersGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.isTouching(person)){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.isTouching(person)){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x > 29300 && person.x < 29400 || person.x > 49300 && person.x < 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(person.x > 65300 && person.x < 75300){
            if(keyDown(UP_ARROW) && person.y > 450){
                person.y-=10;
            }
            if(keyDown(DOWN_ARROW) && person.y <= 675){
                person.y+=10;
            }
        } else {
            if(keyDown(UP_ARROW) && person.y > 120){
                person.y-=10;
            }
            if(keyDown(DOWN_ARROW) && person.y <= 675){
                person.y+=10;
            }
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }
        
        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);

        drawSprites();

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("You can change your avatar anytime using the icons.",person.x+225,30);
        text("Press and hold the f key to fly. Flying makes it easier to avoid obstacles.",person.x+60,55);
        text("Press and hold the k key to destroy obstacles. Remember, this avatar is",person.x+60,80);
        text("not capable of destroying all obstacles. Shift to another one is needed.",person.x+70,105);
        text("Don't press the k key too early or too late! Otherwise, it will be ineffective",person.x+55,130);
        text("and the game will end. Be careful! Remember to collect keys!",person.x+150,155);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,180);

        if(person.x >= 29300 && person.x < 29400){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can move in the jungle.",person.x-700,750);
        }

        if(person.x > 19300 && person.x < 29300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Iron Man cannot destroy bullets!",person.x-700,750);
        }

        if(person.x > 39300 && person.x < 49300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Iron Man cannot close portals!",person.x-700,750);
        }

        if(person.x > 59300 && person.x < 65300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Iron Man cannot destroy boulders!",person.x-700,750);
        }

        if(person.x > 49300 && person.x < 59300){
            textFont("Arial");
            textSize(40);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can cross the red void with powerful, dark magic!",person.x-700,750);
        }

        if(person.x > 81300 && person.x < 88300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Iron Man cannot come near lightning!",person.x-700,750);
        }

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "captainAmericaPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
            person.y = 625;
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay"
            person.y = 625;
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
            person.y = 625;
        }

        if(keyWentDown("k")){

            person.addAnimation("captainAmericaPowerAnimation",captainAmericaPowerAnimation);
            person.changeAnimation("captainAmericaPowerAnimation");

            for(var i = 0; i < arrowsGroup.length; i++){
                if(arrowsGroup.get(i).x - person.x <= 300 && person.y - arrowsGroup.get(i).y < 150 && arrowsGroup.get(i).y - person.y < 150){
                    arrowsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < bulletsGroup.length; i++){
                if(bulletsGroup.get(i).x - person.x <= 300 && person.y - bulletsGroup.get(i).y < 150 && bulletsGroup.get(i).y - person.y < 150){
                    bulletsGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
        }

        for(var i = 0; i < arrowsGroup.length; i++){
            if(arrowsGroup.get(i).isTouching(person) && person.animation !== captainAmericaPowerAnimation){
                gameState = "end";
                arrowsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.get(i).isTouching(person) && person.animation !== captainAmericaPowerAnimation){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < wallsGroup.length; i++){
            if(wallsGroup.isTouching(person)){
                gameState = "end";
                wallsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < portalsGroup.length; i++){
            if(portalsGroup.isTouching(person)){
                gameState = "end";
                portalsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bouldersGroup.length; i++){
            if(bouldersGroup.isTouching(person)){
                gameState = "end";
                bouldersGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.isTouching(person)){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < treesGroup.length; i++){
            if(treesGroup.isTouching(person)){
                gameState = "end";
                treesGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.isTouching(person)){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }   
        }
        
        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x > 29300 && person.x < 29400 || person.x > 75300 && person.x < 88300 || person.x > 49300 && person.x < 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 500){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 675){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
        
        drawSprites();

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("You can change your avatar anytime using the icons.",person.x+225,30);
        text("You cannot jump or fly in this avatar.",person.x+370,55);
        text("Press and hold the k key to destroy obstacles. Remember, this avatar is",person.x+60,80);
        text("not capable of destroying all obstacles. Shift to another one is needed.",person.x+70,105);
        text("Don't press the k key too early or too late! Otherwise, it will be ineffective",person.x+55,130);
        text("and the game will end. Be careful! Remember to collect keys!",person.x+150,155);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,180);

        if(person.x >= 29300 && person.x < 29400){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can move in the jungle. Switch!",person.x-700,750);
        }

        if(person.x > 49300 && person.x < 59300){
            textFont("Arial");
            textSize(40);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can cross the red void with powerful, dark magic!",person.x-700,750);
        }

        if(person.x > 75300 && person.x < 88300){
            textFont("Arial");
            textSize(60);
            fill("cyan");
            stroke(0);
            strokeWeight(4);
            text("Captain America cannot fly.",person.x-700,750);
        }

        if(person.x > 65300 && person.x < 75300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Captain America cannot destroy fallen trees!",person.x-700,750);
        }

        if(person.x > 59300 && person.x < 65300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Captain America cannot destroy boulders!",person.x-700,750);
        }

        if(person.x > 39300 && person.x < 42000){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Captain America cannot close portals!",person.x-700,750);
        }

        if(person.x > 9300 && person.x < 19300){
            textFont("Arial");
            textSize(36);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Captain America does not have the power to destroy obstacles amidst fire!",person.x-700,750);
        }

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "drStrangePlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
            person.y = 625;
        }

        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
            person.y = 625;
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
            person.y = 625;
        }

        if(keyWentDown("k")){

            person.addAnimation("drStrangeDoMagicImg",drStrangeDoMagicImg);
            person.changeAnimation("drStrangeDoMagicImg");

            for(var i = 0; i < portalsGroup.length; i++){
                if(portalsGroup.get(i).x - person.x <= 350 && person.y - portalsGroup.get(i).y < 250 && portalsGroup.get(i).y - person.y < 250){
                    portalsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < arrowsGroup.length; i++){
                if(arrowsGroup.get(i).x - person.x <= 300 && person.y - arrowsGroup.get(i).y < 150 && arrowsGroup.get(i).y - person.y < 150){
                    arrowsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < bulletsGroup.length; i++){
                if(bulletsGroup.get(i).x - person.x <= 300 && person.y - bulletsGroup.get(i).y < 150 && bulletsGroup.get(i).y - person.y < 150){
                    bulletsGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
        }

        for(var i = 0; i < portalsGroup.length; i++){
            if(portalsGroup.get(i).isTouching(person) && person.animation !== drStrangeDoMagicImg){
                gameState = "end";
                portalsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < arrowsGroup.length; i++){
            if(arrowsGroup.get(i).isTouching(person) && person.animation !== drStrangeDoMagicImg){
                gameState = "end";
                arrowsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.get(i).isTouching(person) && person.animation !== drStrangeDoMagicImg){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < wallsGroup.length; i++){
            if(wallsGroup.isTouching(person)){
                gameState = "end";
                wallsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bouldersGroup.length; i++){
            if(bouldersGroup.isTouching(person)){
                gameState = "end";
                bouldersGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.isTouching(person)){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < treesGroup.length; i++){
            if(treesGroup.isTouching(person)){
                gameState = "end";
                treesGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.isTouching(person)){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }   
        }
        
        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x > 29300 && person.x < 29400 || person.x > 75300 && person.x < 88300 || person.x > 49300 && person.x < 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 500){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 675){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
        
        drawSprites();

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("You can change your avatar anytime using the icons.",person.x+225,30);
        text("You cannot jump or fly in this avatar.",person.x+370,55);
        text("Press and hold the k key to destroy obstacles. Remember, this avatar is",person.x+60,80);
        text("not capable of destroying all obstacles. Shift to another one is needed.",person.x+70,105);
        text("Don't press the k key too early or too late! Otherwise, it will be ineffective",person.x+55,130);
        text("and the game will end. Be careful! Remember to collect keys!",person.x+150,155);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,180);

        if(person.x > 49300 && person.x < 59300){
            textFont("Arial");
            textSize(40);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can cross the red void with powerful, dark magic!",person.x-700,750);
        }

        if(person.x >= 29300 && person.x < 29400){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can move in the jungle.",person.x-700,750);
        }

        if(person.x > 9300 && person.x < 19300){
            textFont("Arial");
            textSize(36);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Doctor Strange does not have the power to destroy obstacles amidst fire!",person.x-700,750);
        }

        if(person.x > 75300 && person.x < 88300){
            textFont("Arial");
            textSize(60);
            fill("cyan");
            stroke(0);
            strokeWeight(4);
            text("Doctor Strange cannot fly.",person.x-700,750);
        }

        if(person.x > 65300 && person.x < 75300){
            textFont("Arial");
            textSize(55);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Doctor Strange cannot destroy fallen trees!",person.x-700,750);
        }

        if(person.x > 59300 && person.x < 65300){
            textFont("Arial");
            textSize(55);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Doctor Strange cannot destroy boulders!",person.x-700,750);
        }

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "hulkPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
            person.y = 625;
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay";
            person.y = 625;
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
            person.y = 625;
        }

        if(keyWentDown("k")){

            person.addImage("hulkPunchImg",hulkPunchImg);
            person.changeImage("hulkPunchImg");

            for(var i = 0; i < arrowsGroup.length; i++){
                if(arrowsGroup.get(i).x - person.x <= 350 && person.y - arrowsGroup.get(i).y < 150 && arrowsGroup.get(i).y - person.y < 150){
                    arrowsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < bouldersGroup.length; i++){
                if(bouldersGroup.get(i).x - person.x <= 400 && person.y - bouldersGroup.get(i).y < 200 && bouldersGroup.get(i).y - person.y < 200){
                    bouldersGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < treesGroup.length; i++){
                if(treesGroup.get(i).x - person.x <= 350 && person.y - treesGroup.get(i).y < 200 && treesGroup.get(i).y - person.y < 200){
                    treesGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
        }

        for(var i = 0; i < arrowsGroup.length; i++){
            if(arrowsGroup.get(i).isTouching(person) && person.animation !== hulkRunAnimation){
                gameState = "end";
                arrowsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < bouldersGroup.length; i++){
            if(bouldersGroup.get(i).isTouching(person) && person.animation !== hulkRunAnimation){
                gameState = "end";
                bouldersGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < treesGroup.length; i++){
            if(treesGroup.get(i).isTouching(person) && person.animation !== hulkRunAnimation){
                gameState = "end";
                treesGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < wallsGroup.length; i++){
            if(wallsGroup.isTouching(person)){
                gameState = "end";
                wallsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.isTouching(person)){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.isTouching(person)){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < portalsGroup.length; i++){
            if(portalsGroup.isTouching(person)){
                gameState = "end";
                portalsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.isTouching(person)){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x > 29300 && person.x < 29400 || person.x > 75300 && person.x < 88300 || person.x > 49300 && person.x < 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 500){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 675){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
        
        drawSprites();

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("You can change your avatar anytime using the icons.",person.x+225,30);
        text("You cannot jump or fly in this avatar.",person.x+370,55);
        text("Press and hold the k key to destroy obstacles. Remember, this avatar is",person.x+60,80);
        text("not capable of destroying all obstacles. Shift to another one is needed.",person.x+70,105);
        text("Don't press the k key too early or too late! Otherwise, it will be ineffective",person.x+55,130);
        text("and the game will end. Be careful! Remember to collect keys!",person.x+150,155);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,180);

        if(person.x > 39300 && person.x < 49300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Hulk cannot close portals!",person.x-700,750);
        }

        if(person.x > 19300 && person.x < 29300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Hulk cannot destroy subtle bullets!",person.x-700,750);
        }

        if(person.x > 49300 && person.x < 59300){
            textFont("Arial");
            textSize(40);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can cross the red void with powerful, dark magic!",person.x-700,750);
        }

        if(person.x >= 29300 && person.x < 29400){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can move in the jungle. Switch!",person.x-700,750);
        }

        if(person.x > 9300 && person.x < 19300){
            textFont("Arial");
            textSize(36);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Hulk does not have the power to destroy obstacles amidst fire!",person.x-700,750);
        }

        if(person.x > 75300 && person.x < 88300){
            textFont("Arial");
            textSize(60);
            fill("cyan");
            stroke(0);
            strokeWeight(4);
            text("Hulk cannot fly.",person.x-700,750);
        }

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "scarletWitchPlay"){
        
        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.2;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;
        scarletWitchButton.visible = true;
        scarletWitchButton.x = person.x+10;

        if(keyWentDown("k")){

            term+=1;

            for(var i = 0; i < fireballsGroup.length; i++){
                if(fireballsGroup.get(i).x - person.x <= 400 && person.y - fireballsGroup.get(i).y < 250 && fireballsGroup.get(i).y - person.y < 250){
                    fireballsGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            term-=1;
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.get(i).isTouching(person) && term !== 1){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }
        }
        
        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x >= 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 150){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 650){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }
        
        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
                
        drawSprites();

        if(person.x < 59300 && mousePressedOver(ironManButton) || person.x < 59300 && mousePressedOver(captainAmericaButton) || person.x < 59300 && mousePressedOver(drStrangeButton) || person.x < 59300 && mousePressedOver(blackWidowButton) || person.x < 59300 && mousePressedOver(hulkButton)){
            clickSound.play();
            textFont("Arial");
            textSize(50);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can survive in the void.",person.x-700,750);
        }

        if(person.x >= 59300){
            if(mousePressedOver(ironManButton)){
                clickSound.play();
                person.addAnimation("ironManHoverImg",ironManHoverImg);
                person.changeAnimation("ironManHoverImg");
                person.scale = 0.5;
                gameState = "ironManPlay";
            }
    
            if(mousePressedOver(captainAmericaButton)){
                clickSound.play();
                person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
                person.changeAnimation("captainAmericaRunAnimation");
                person.scale = 0.5;
                gameState = "captainAmericaPlay";
                person.y = 625;
            }
    
            if(mousePressedOver(drStrangeButton)){
                clickSound.play();
                person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
                person.changeAnimation("drStrangeWalkAnimation");
                person.scale = 0.5;
                gameState = "drStrangePlay";
                person.y = 625;
            }
    
            if(mousePressedOver(blackWidowButton)){
                clickSound.play();
                person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
                person.changeAnimation("blackWidowRunAnimation");
                person.scale = 0.5;
                gameState = "blackWidowPlay";
                person.y = 625;
            }
    
            if(mousePressedOver(hulkButton)){
                clickSound.play();
                person.addAnimation("hulkRunAnimation",hulkRunAnimation);
                person.changeAnimation("hulkRunAnimation");
                person.scale = 0.5;
                gameState = "hulkPlay";
                person.y = 625;
            }
            
            textFont("Arial");
            textSize(30);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Change your avatar. The Scarlet Witch avatar consumes too much energy and is only needed in the void.",person.x-700,750);
        }

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Scarlet Witch is only usable in the red, radiant void.",person.x+240,30);
        text("Press the k key to destroy magical fire in your path.",person.x+240,55);
        text("Be careful! Remember to collect keys!",person.x+350,80);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,105);
        
        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "blackWidowPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;

        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay";
            person.y = 625;
        }

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
            person.y = 625;
        }
        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
            person.y = 625;
        }

        if(keyWentDown("k")){

            person.addAnimation("blackWidowKickImg",blackWidowKickImg);
            person.changeAnimation("blackWidowKickImg");

            for(var i = 0; i < arrowsGroup.length; i++){
                if(arrowsGroup.get(i).x - person.x <= 300 && person.y - arrowsGroup.get(i).y < 150 && arrowsGroup.get(i).y - person.y < 150){
                    arrowsGroup.get(i).destroy();
                }
            }

            for(var i = 0; i < bulletsGroup.length; i++){
                if(bulletsGroup.get(i).x - person.x <= 300 && person.y - bulletsGroup.get(i).y < 150 && bulletsGroup.get(i).y - person.y < 150){
                    bulletsGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
        }
        
        for(var i = 0; i < arrowsGroup.length; i++){
            if(arrowsGroup.get(i).isTouching(person) && person.animation !== blackWidowKickImg){
                gameState = "end";
                arrowsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.get(i).isTouching(person) && person.animation !== blackWidowKickImg){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < wallsGroup.length; i++){
            if(wallsGroup.isTouching(person)){
                gameState = "end";
                wallsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bulletsGroup.length; i++){
            if(bulletsGroup.isTouching(person)){
                gameState = "end";
                bulletsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < fireballsGroup.length; i++){
            if(fireballsGroup.isTouching(person)){
                gameState = "end";
                fireballsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < portalsGroup.length; i++){
            if(portalsGroup.isTouching(person)){
                gameState = "end";
                portalsGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.isTouching(person)){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < bouldersGroup.length; i++){
            if(bouldersGroup.isTouching(person)){
                gameState = "end";
                bouldersGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < treesGroup.length; i++){
            if(treesGroup.isTouching(person)){
                gameState = "end";
                treesGroup.get(i).destroy();
            }   
        }

        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x > 29300 && person.x < 29400 || person.x > 75300 && person.x < 88300 || person.x > 49300 && person.x < 59300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 500){
            person.y-=10;
        }
        if(keyDown(DOWN_ARROW) && person.y <= 675){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
        
        drawSprites();

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("You can change your avatar anytime using the icons.",person.x+225,30);
        text("You cannot jump or fly in this avatar.",person.x+370,55);
        text("Press and hold the k key to destroy obstacles. Remember, this avatar is",person.x+60,80);
        text("not capable of destroying all obstacles. Shift to another one is needed.",person.x+70,105);
        text("Don't press the k key too early or too late! Otherwise, it will be ineffective",person.x+55,130);
        text("and the game will end. Be careful! Remember to collect keys!",person.x+150,155);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,180);

        if(person.x > 65300 && person.x < 75300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Black Widow cannot destroy fallen trees!",person.x-700,750);
        }

        if(person.x > 59300 && person.x < 65300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Black Widow cannot destroy boulders!",person.x-700,750);
        }

        if(person.x > 39300 && person.x < 49300){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Black Widow cannot close portals!",person.x-700,750);
        }

        if(person.x > 49300 && person.x < 59300){
            textFont("Arial");
            textSize(40);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Scarlet Witch avatar can cross the red void with powerful, dark magic!",person.x-700,750);
        }

        if(person.x >= 29300 && person.x < 29400){
            textFont("Arial");
            textSize(60);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can move in the jungle.",person.x-700,750);
        }

        if(person.x > 9300 && person.x < 19300){
            textFont("Arial");
            textSize(36);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("WARNING! Black Widow does not have the power to destroy obstacles amidst fire!",person.x-700,750);
        }

        if(person.x > 75300 && person.x < 88300){
            textFont("Arial");
            textSize(60);
            fill("cyan");
            stroke(0);
            strokeWeight(4);
            text("Black Widow cannot fly.",person.x-700,750);
        }

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "thorPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;
        
        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;
        thorButton.visible = true;
        thorButton.x = person.x;
        scarletWitchButton.visible = false;
        spidermanButton.visible = false;

        if(keyWentDown("k")){

            term+=1;

            for(var i = 0; i < lightningGroup.length; i++){
                if(lightningGroup.get(i).x - person.x <= 375 && person.y - lightningGroup.get(i).y < 250 && lightningGroup.get(i).y - person.y < 250){
                    lightningGroup.get(i).destroy();
                }
            }

        }

        if(keyWentUp("k")){
            term-=1;
        }

        for(var i = 0; i < lightningGroup.length; i++){
            if(lightningGroup.get(i).isTouching(person) && term !== 1){
                gameState = "end";
                lightningGroup.get(i).destroy();
            }
        }
        
        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x < 81300 || person.x > 88300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 150){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 650){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
                
        drawSprites();

        if(person.x < 88300 && mousePressedOver(ironManButton) || person.x < 88300 && mousePressedOver(captainAmericaButton) || person.x < 88300 && mousePressedOver(drStrangeButton) || person.x < 88300 && mousePressedOver(blackWidowButton) || person.x < 88300 && mousePressedOver(hulkButton)){
            clickSound.play();
            textFont("Arial");
            textSize(50);
            fill("red");
            stroke(0);
            strokeWeight(4);
            text("Only the Thor avatar can survive in a lightning storm.",person.x-700,750);
        }

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Thor is only usable in the stormy, dark sky.",person.x+310,30);
        text("Press the k key to destroy lightning in your path.",person.x+270,55);
        text("Be careful! Lightning may be closer than it seems.",person.x+250,80);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,105);

        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);

    }

    if(gameState === "spidermanPlay"){

        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);
        rocketsGroup.setVisibleEach(true);
        stumpsGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = true;
        person.scale = 0.5;

        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;
        spidermanButton.visible = true;
        spidermanButton.x = person.x;
        thorButton.visible = false;
        scarletWitchButton.visible = false;
        
        for(var i = 0; i < stumpsGroup.length; i++){
            if(stumpsGroup.get(i).isTouching(person)){
                gameState = "end";
                stumpsGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < keysGroup.length; i++){
            if(keysGroup.get(i).isTouching(person)){
                keySound.play();
                keys = keys + 1;
                keysGroup.get(i).destroy();
            }
        }

        if(keyDown("p") || person.x < 29300 || person.x >= 39300){
            person.velocityX = 0;
        } else {
            person.velocityX = 9;
        }

        if(keyDown(UP_ARROW) && person.y > 150){
            person.y-=10;
        }

        if(keyDown(DOWN_ARROW) && person.y <= 650){
            person.y+=10;
        }

        camera.position.x = person.x;

        if(person.x >= 88300){
            gameState = "win";
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);
        
        drawSprites();

        if(person.x < 39300 && mousePressedOver(ironManButton) || person.x < 39300 && mousePressedOver(captainAmericaButton) || person.x < 39300 && mousePressedOver(drStrangeButton) || person.x < 39300 && mousePressedOver(blackWidowButton) || person.x < 39300 && mousePressedOver(hulkButton)){
            clickSound.play();
            textFont("Arial");
            textSize(50);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Only the Spiderman avatar can survive in the jungle.",person.x-700,750);
        }

        if(person.x >= 39300){
            if(mousePressedOver(ironManButton)){
                clickSound.play();
                person.addAnimation("ironManHoverImg",ironManHoverImg);
                person.changeAnimation("ironManHoverImg");
                gameState = "ironManPlay";
            }
    
            if(mousePressedOver(captainAmericaButton)){
                clickSound.play();
                person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
                person.changeAnimation("captainAmericaRunAnimation");
                gameState = "captainAmericaPlay";
            }
    
            if(mousePressedOver(drStrangeButton)){
                clickSound.play();
                person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
                person.changeAnimation("drStrangeWalkAnimation");
                gameState = "drStrangePlay";
            }
    
            if(mousePressedOver(blackWidowButton)){
                clickSound.play();
                person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
                person.changeAnimation("blackWidowRunAnimation");
                gameState = "blackWidowPlay";
            }
    
            if(mousePressedOver(hulkButton)){
                clickSound.play();
                person.addAnimation("hulkRunAnimation",hulkRunAnimation);
                person.changeAnimation("hulkRunAnimation");
                gameState = "hulkPlay";
            }

            textFont("Arial");
            textSize(30);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Change your avatar. The Spiderman avatar requires too much energy and is only needed in the jungle.",person.x-700,750)
        }

        textFont("Arial");
        textSize(19);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Spiderman is only usable in the thick jungle.",person.x+310,30);
        text("Use the arrow keys to avoid stumps in your route.",person.x+270,55);
        text("Be careful! Remember to collect keys!",person.x+350,80);
        fill("orange");
        text("Number of Keys Collected: " + keys,person.x+420,105);
        
        textFont("Arial");
        textSize(35);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        text("Press and hold the p key to pause the game.",person.x-700,175);
        
    }


    if(gameState === "play2"){
        
        arrowsGroup.setVisibleEach(true);
        keysGroup.setVisibleEach(true);
        wallsGroup.setVisibleEach(true);
        bulletsGroup.setVisibleEach(true);
        portalsGroup.setVisibleEach(true);
        fireballsGroup.setVisibleEach(true);
        bouldersGroup.setVisibleEach(true);
        treesGroup.setVisibleEach(true);
        lightningGroup.setVisibleEach(true);

        leftArrow.visible = false;
        rightArrow.visible = false;
        descriptionsButton.visible = false;
        nextButton.visible = false;
        playButton.visible = false;
        backButton.visible = false;

        person.visible = false;
        person.velocityX = 0;

        captainAmericaButton.visible = true;
        captainAmericaButton.x = person.x-480;
        ironManButton.visible = true;
        ironManButton.x = person.x-600;
        hulkButton.visible = true;
        hulkButton.x = person.x-355;
        drStrangeButton.visible = true;
        drStrangeButton.x = person.x-230;
        blackWidowButton.visible = true;
        blackWidowButton.x = person.x-115;
        
        if(person.x >= 81300 && person.x <= 88300){
            thorButton.visible = true;
            thorButton.x = person.x;
            if(mousePressedOver(thorButton)){
                clickSound.play();
                person.addImage("thorFlyingImg",thorFlyingImg);
                person.changeImage("thorFlyingImg");
                gameState = "thorPlay";
            }
        } else {
            thorButton.visible = false;
        }
        
        if(person.x >= 49300 & person.x <= 59300){
            scarletWitchButton.visible = true;
            scarletWitchButton.x = person.x;
            if(mousePressedOver(scarletWitchButton)){
                clickSound.play();
                person.addImage("scarletWitchImg",scarletWitchImg);
                person.changeImage("scarletWitchImg");
                gameState = "scarletWitchPlay";
            }
        } else {
            scarletWitchButton.visible = false;
        }
        
        if(person.x >= 29300 && person.x <= 39300){
            spidermanButton.visible = true;
            spidermanButton.x = person.x; 
            if(mousePressedOver(spidermanButton)){
                clickSound.play();
                person.addAnimation("spidermanSwingAnimation",spidermanSwingAnimation);
                person.changeAnimation("spidermanSwingAnimation");
                gameState = "spidermanPlay";
            }   
        } else {
            spidermanButton.visible = false;
        }

        if(mousePressedOver(ironManButton)){
            clickSound.play();
            person.addAnimation("ironManHoverImg",ironManHoverImg);
            person.changeAnimation("ironManHoverImg");
            gameState = "ironManPlay";
        }

        if(mousePressedOver(captainAmericaButton)){
            clickSound.play();
            person.addAnimation("captainAmericaRunAnimation",captainAmericaRunAnimation);
            person.changeAnimation("captainAmericaRunAnimation");
            gameState = "captainAmericaPlay";
            person.y = 625;
        }

        if(mousePressedOver(hulkButton)){
            clickSound.play();
            person.addAnimation("hulkRunAnimation",hulkRunAnimation);
            person.changeAnimation("hulkRunAnimation");
            gameState = "hulkPlay";
            person.y = 625;
        }

        if(mousePressedOver(drStrangeButton)){
            clickSound.play();
            person.addAnimation("drStrangeWalkAnimation",drStrangeWalkAnimation);
            person.changeAnimation("drStrangeWalkAnimation");
            gameState = "drStrangePlay";
            person.y = 625;
        }

        if(mousePressedOver(blackWidowButton)){
            clickSound.play();
            person.addAnimation("blackWidowRunAnimation",blackWidowRunAnimation);
            person.changeAnimation("blackWidowRunAnimation");
            gameState = "blackWidowPlay";
            person.y = 625;
        }

        image(battlefieldBackgroundMediumImg,-700,0,10000,800);
        image(fieryBackgroundMediumImg,9300,0,10000,800);
        image(insideBuildingBackgroundMediumImg,19300,0,10000,800);
        image(jungleBackgroundMediumImg,29300,0,10000,800);
        image(mountainRedBackgroundMediumImg,39300,0,10000,800);
        image(redBackgroundMediumImg,49300,0,10000,800);
        image(rockyBackgroundMediumImg,59300,0,6000,800);
        image(rockyStormyBackgroundMediumImg,65300,0,5000,800);
        image(rockyStormyBackgroundMediumImg,70300,0,5000,800);
        image(skyscrapersBackgroundMediumImg,75300,0,6000,800);
        image(stormyNightBackgroundMediumImg,81300,0,7000,800);

        camera.position.x = person.x;
        
        drawSprites();

        textFont("Arial");
        textSize(40);
        fill("gold");
        stroke(0);
        strokeWeight(4);
        textFont("Georgia");
        text("Choose which superhero you want to continue as",person.x-670,180);
        text("by clicking on their icon above!",person.x-670,230);
        
    }

    if(gameState === "end"){

        background(endBg);

        var num = 0;
        
        if(keyWentDown("c") && keys >= 5){
            num = num + 1;
            keys = keys - 5;
            gameState = "play2";
        }

        if(keyWentUp("c")){
            num = 0;
        }

        if(keys < 5 && num === 0){
            gameState = "end2";
        }

        textFont("Impact");
        textSize(60);
        fill(255);
        noStroke();
        text(keys,camera.position.x-550,100);

    }
    
    if(gameState === "end2"){

        background(end2Bg);

        textFont("Impact");
        textSize(50);
        fill(255);
        noStroke();
        text(keys,camera.position.x-370,60);

    }

    if(gameState === "win"){
        background(winBg);
    }

    if(gameState === "ironManPlay" || gameState === "captainAmericaPlay" || gameState === "drStrangePlay" || gameState === "hulkPlay" || gameState === "blackWidowPlay"){
        if(person.x > 59300 && person.x < 65300){
            textFont("Arial");
            textSize(35);
            fill("orange");
            stroke(0);
            strokeWeight(4);
            text("Keys and boulders in your path camouflage with",person.x-700,220);
            text("the rocky terrain to your left. Watch out!",person.x-700,260);
        }
    }

    if(gameState === "ironManPlay" || gameState === "captainAmericaPlay" || gameState === "drStrangePlay" || gameState === "hulkPlay" || gameState === "blackWidowPlay" || gameState === "scarletWitchPlay" || gameState === "spidermanPlay" || gameState === "thorPlay"){
        
        var distance = 88300-person.x;
        
        textFont("Arial");
        textSize(20);
        fill("lightgreen");
        stroke(0);
        strokeWeight(4);
        text("Distance remaining: " + distance, person.x+430,205);

    }

}