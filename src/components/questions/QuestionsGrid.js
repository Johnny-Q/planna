import { Box, Grid, AspectRatio, Center } from "@chakra-ui/react";
// import { BellIcon, Icon } from "@chakra-ui/icons";
// import Notifs from "../icons/Notifs";
import Question from "./Question";
import React from 'react';
<svg width="1549" height="1549" viewBox="0 0 1549 1549" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1268.43 728.86C1246.1 775.885 1147.93 1002.78 1134.56 1023.77C1133.01 1026.24 1131.57 1028.71 1130.23 1031.07C1117.17 1053.4 1103.38 1070.59 1055.84 1070.59H602.158C611.624 1099.5 631.484 1135.1 672.643 1135.1H1065.31C1076.93 1135.1 1086.3 1144.57 1086.3 1156.1C1086.3 1167.72 1076.93 1177.09 1065.31 1177.09H672.643C614.402 1177.09 571.802 1131.5 555.956 1061.53C547.21 1022.94 440.915 667.326 433.3 639.441C425.171 621.742 406.135 608.983 387.716 608.983H290.991C279.364 608.983 270 599.516 270 587.991C270 576.467 279.467 567 290.991 567H387.716C423.731 567 457.79 568.955 472.505 603.118C472.917 604.044 473.225 604.97 473.431 605.896C477.65 621.125 565.731 933.629 590.839 1028.5H1055.74C1083 1028.5 1085.68 1023.77 1093.81 1009.88C1095.45 1007.1 1097.1 1004.22 1099.06 1001.23C1111.51 981.682 1209.05 756.128 1229.84 712.293C1238.48 689.655 1236.94 677.308 1234.57 673.809C1233.03 671.545 1227.99 670.208 1221.09 670.208C1175.61 670.928 598.144 670.208 578.079 670.208C566.452 670.208 557.088 660.741 557.088 649.113C557.088 637.486 566.452 628.122 578.079 628.122C583.018 628.122 1175.2 628.842 1220.68 628.122C1248.36 628.122 1262.25 639.955 1269.15 649.936C1281.7 668.252 1281.5 694.8 1268.43 728.86ZM661.427 1197.87C715.552 1197.87 759.696 1241.91 759.696 1296.14C759.696 1350.37 715.655 1394.31 661.427 1394.31C607.302 1394.31 563.262 1350.27 563.262 1296.04C563.262 1241.81 607.302 1197.87 661.427 1197.87ZM661.427 1353.97C693.326 1353.97 719.256 1328.04 719.256 1296.14C719.256 1264.24 693.326 1238.31 661.427 1238.31C629.529 1238.31 603.598 1264.24 603.598 1296.14C603.701 1328.04 629.632 1353.97 661.427 1353.97Z" fill="black" />
    <path d="M1060.98 1197.87C1115.11 1197.87 1159.25 1241.91 1159.25 1296.14C1159.25 1350.37 1115.21 1394.31 1060.98 1394.31C1006.76 1394.31 962.817 1350.27 962.817 1296.04C962.817 1241.81 1006.86 1197.87 1060.98 1197.87ZM1060.98 1353.97C1092.88 1353.97 1118.81 1328.04 1118.81 1296.14C1118.81 1264.24 1092.88 1238.31 1060.98 1238.31C1029.08 1238.31 1003.15 1264.24 1003.15 1296.14C1003.15 1328.04 1029.19 1353.97 1060.98 1353.97Z" fill="black" />
    <ellipse cx="1239.89" cy="524.89" rx="209.889" ry="209.889" fill="#EF4949" />
</svg>


const QuestionsGrid = () => {
    return (
        <Grid
            w="1200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap="1px"
            p="1px"
            bg="gray"
        >
            <Question />
            <Question />
            <Question />
            <Question />

            <AspectRatio ratio={1 / 1}>
                <Box w="100%"h="100%"bg="white"/>
            </AspectRatio>
            <AspectRatio ratio={1 / 1}>
                <Box w="100%"h="100%"bg="white"/>
            </AspectRatio>
            {/* <AspectRatio ratio={1 / 1}>
                <Box w="100%" h="100%" bg="white" border="1px solid black">
                    <Center w={10} h={10} position="relative">
                        <BellIcon w={10} h={10} />
                        <Icon viewBox="0 0 16 16" w={8} h={8} position="absolute" bottom="0" left="0">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </Icon>
                        <Notifs amt={0} w={5} h={5} position="absolute" top="0" right="0"/>
                        <Icon as={Notifs} amt={0} w={5} h={5} position="absolute" top="0" right="0" />
                    </Center>
                </Box>
            </AspectRatio> */}

        </Grid>
    )
}

export default QuestionsGrid