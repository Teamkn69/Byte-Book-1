import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = () => {
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const [likeCount,setLikeCount] = useState(100);
  const [isLiked, setIsLiked] = useState(false);
 
  const onLikeToggle = ()=>{
   setIsLiked((prev)=>!prev);
   
}



useEffect(()=>{
  if(isLiked === true){
    setLikeCount(likeCount+1);
   }
   else 
   setLikeCount(likeCount-1); 
},[isLiked])
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() =>onLikeToggle()}
        >
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likeCount} likes
      </Text>

      {
        <>
          <Text fontSize="sm" fontWeight={700}>
            {"Hello"}{" "}
            <Text as="span" fontWeight={400}>
              {"POST CAPTION"}
            </Text>
          </Text>

          {/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
        </>
      }

      {
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      }
    </Box>
  );
};

export default PostFooter;
