import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Avatar,
    Box,
    Heading,
    IconButton,
    Button,
    Text,
    Badge,
    Image,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent, ModalBody, ModalFooter, InputGroup, InputLeftElement, Input, InputRightElement
} from "@chakra-ui/react";
import {BsThreeDotsVertical} from "react-icons/bs";
import {BiLike, BiShare, BiChat} from "react-icons/bi";
import {colors} from "../../../../common/colors";
import CommentsModal from "./CommentsModal";

const PostCard = ({
    author,
    authorProfilePic,
    date,
    content,
    likes,
    comments,
    imageSrc,
    isLoaded
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Card
                w={"95%"}
                m={"2"}
                borderWidth={"2px"}
                borderRadius={"lg"}
                borderColor={colors.hex.light}
            >
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <SkeletonCircle size={"50px"} isLoaded={isLoaded}>
                                <Avatar name={author} src={authorProfilePic} />
                            </SkeletonCircle>
                            <SkeletonText
                                noOfLines={2}
                                spacing={2}
                                skeletonHeight={4}
                                isLoaded={isLoaded}
                            >
                                <Box>
                                    <Heading size='sm'>{author}</Heading>
                                    <Text color={colors.hex.gray}>{date}</Text>
                                </Box>
                            </SkeletonText>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    <SkeletonText
                        noOfLines={3}
                        spacing={2}
                        skeletonHeight={5}
                        isLoaded={isLoaded}
                    >
                        <Text>
                            {
                                content
                            }
                        </Text>
                    </SkeletonText>
                </CardBody>
                {
                    imageSrc &&
                    <Skeleton
                        borderRadius={"md"}
                        padding={4}
                        isLoaded={isLoaded}
                    >
                        <Image
                            src={imageSrc}
                            borderRadius={"md"}
                        />
                    </Skeleton>
                }
                <CardFooter
                    justify='center'
                    gap={4}
                    flexWrap='nowrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Skeleton
                        borderRadius={"md"}
                        w={"48%"}
                        isLoaded={isLoaded}
                    >
                        <Button w={"100%"} flex='1' variant='ghost' bgColor={colors.hex.light} leftIcon={
                            <Flex
                                flexDir={"row"}
                                flexWrap={"nowrap"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"2"}
                            >
                                {
                                    likes ?
                                        <Badge>{likes}</Badge>:
                                        ''
                                }
                                <BiLike/>
                            </Flex>
                        }>
                            Like
                        </Button>
                    </Skeleton>
                    <Skeleton
                        borderRadius={"md"}
                        w={"48%"}
                        isLoaded={isLoaded}
                    >
                        <Button w={"100%"} flex='1' variant='ghost' bgColor={colors.hex.light} leftIcon={
                            <Flex
                                flexDir={"row"}
                                flexWrap={"nowrap"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={2}
                            >
                                {
                                    comments ?
                                        <Badge>{comments}</Badge>:
                                        ''
                                }
                                <BiChat/>
                            </Flex>
                        }
                            onClick={onOpen}
                        >
                            Comment
                        </Button>
                    </Skeleton>
                </CardFooter>
            </Card>
            <CommentsModal isOpen={isOpen} onClose={onClose}/>
        </>
    )
}
export default PostCard