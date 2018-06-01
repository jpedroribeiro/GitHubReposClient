import gql from 'graphql-tag';

export const authorQuery = gql`
	{
		author {
			name
			bio
			avatarUrl
			location
			url
		}
	}
`;

export const reposQuery = gql`
	{
		repositories {
			id
			name
			createdAt
			description
			url
			pushedAt
			primaryLanguage
			topics {
				name
			}
		}
	}
`;
