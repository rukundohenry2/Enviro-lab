<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="media/logo/logo.png">
    <!-- add custom font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">
    <title>Enviro Lab|Home</title>
</head>
<body>
    
    <div class="middlepart1">
        <?php include "header.html" ?>
        <div class="aboutsection">
            <div class="aboutdesc">
                <h1>What we are.</h1>
                <p>Envirolab Conservation Limited is a biodiversity research company in Uganda with a team of
                    experts led by Dr. Waswa Sadic Babyesiza, with interests in conservation science, ecology and
                    biodiversity. Envirolab works on a variety of environmental, ecological, and conservation-
                    related issues and collaborates with numerous organizations worldwide across terrestrial,
                    coastal, and marine ecosystems as well as across spatial scales, from regional (East Africa) to
                    global, in order to help address pressing environmental issues, ecological, sustainability, and
                    conservation challenges across the globe. Working with local communities and international
                    partners, we mentor and educate the next generation of conservation scientists and
                    practitioners in order to improve conservation that benefits communities and livelihoods.</p>
                <a href="">More</a>
            </div>
            <img src="media/vector/imgcollection.png" alt="">
        </div>
    </div>
    <div class="middlepart2">
        <div class="conservesection">
            <img class="gengallery" src="media/vector/gallery.png" alt="">
            <img class="phonegallery" src="media/vector/galleryphone.png" alt="">
            <div class="conservedesc">
                <h1>Environmental conservation</h1>
                <p>Human existence is quite impossible without the presence of a healthy ecosystem. 
                    Our environment comprises all living and non-living components and their interactions within a natural habitat. 
                    Environmental conservation has become one of the core issues that need to be addressed to battle climate change and global warming.
                    For any information needed we shall be ready to help just reach out to us.
                </p>
                <!-- <a href="">More</a> -->
            </div>
        </div>
    </div>
    <div class="middlepart3">
        <h1>Services</h1>
        <div class="services">
            <div class="servicetab">
                <div class="servicehead">
                    <h3>Biological invasions, urban ecology and biodiversity in human-dominated landscapes</h3>
                    <img src="media/icons/icons8_bat_96px.png" alt="">
                </div>
                <div class="servicedesc">
                    <ul>
                        <li>Invasive species assessment and their interactions with native species</li>
                        <li>Bat assessments and their role in seed dispersal disease ecology</li>
                        <li>Rodent pest management in urban and agricultural landscapes while while assessing their role in zoonotic disease transmission. </li>
                        <li>Biodiversity conservation in urban and agricultural landscapes</li>
                    </ul>
                </div>
            </div>
            <div class="servicetab">
                <div class="servicehead">
                    <h3>Biodiversity Conservation along environmental gradients and ecotones</h3>
                    <img src="media/icons/icons8_oak_tree_96px_2.png" alt="">
                </div>
                <div class="servicedesc">
                    <ul>
                        <li>Conservation and collaboration on an international and national scale</li>
                        <li>The role of collaboration in conservation in terrestrial and aquatic systems for example migratory bird species and river systems (Like the Nile).</li>
                        <li>Biodiversity along species ranges, transitional environments (ecotones) and ecological gradients</li>
                    </ul>
                </div>
            </div>
        </div>
        <a href="">More services</a>
    </div>
    <?php include "footer.html" ?>
    <script src="js/slidingmenu.js"></script>
    <script src="js/sticky.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.1/jquery.min.js"></script>
</body>
</html>