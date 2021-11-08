import { gql } from '@apollo/client'

const ALLPROJECTS = gql`
  query GetAllProjects{
    projects{
      id
      name
      link
    }
  }
`;

const AllArticles = gql`
  query GetAllArticles($tags:[Int]){
    articles(where:{public:true, tags:$tags}){
      id
      title
      description
      created_at
    }
    tags{
      id
      name
    }
  }
`;

const ArticleDetail = gql`
  query ArticleDetail($id:ID!){
    article(id:$id){
      id
      title
      description
      created_at
    }
  }
`;

const GetWelcome = gql`
  query GetWelcome{
    welcome{
      title
      description
    }
  }
`;

const GetContact = gql`
  query ContactInfo{
    contact{
      phone
      email
      address
    }
  }
`;

export { ALLPROJECTS, AllArticles, GetWelcome, GetContact, ArticleDetail }