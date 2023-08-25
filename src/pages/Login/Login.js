import React from 'react'
import {Flex} from "@chakra-ui/react";

const Login = () => {
    return (
        /* Please do not touch this Flex,
        it acts as an overlay to make the impression of being on another page
        */
        <Flex
            w={"100vw"}
            h={"100vh"}
            position={"fixed"}
            bg={"white"}
            top={0}
            left={0}
            alignItems={"center"}
            justifyContent={"center"}
        >
            Login
        </Flex>
    )
}
export default Login