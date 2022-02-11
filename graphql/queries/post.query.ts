import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query Posts {
  posts {
    id
    data {
      title
    }
  }
}
`;

export const GET_POST = gql`
query Posts($id: String!) {
  post(_id: $id) {
    id
    data {
      body {
        html
      }
      title
    }
    comments {
      id
      data {
        body
      }
    }
  }
}
`;