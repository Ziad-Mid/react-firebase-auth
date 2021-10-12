import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {

  const {currentUser } = useAuth()


  return (
    <Layout>
      <Heading>Home page</Heading>
      <Text my={6}> {`The current user : ${currentUser}`}</Text>

      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='7xl'
          mx={2}
        >
          v9
        </chakra.span>
       
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google , Facebook, Github Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize='inherit'> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
       
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
     
    </Layout>
  )
}
