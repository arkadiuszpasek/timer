import { createGlobalStyle } from 'styled-components';

const primaryColor = '#128a6c';
const primaryDark = '#043d2f';
const primaryLight = '#31d6ad';

const darkGray = '#3f3f3f';
const lightGray = '#f3f3f3';

export const lightTheme = {
  color: 'black',
  primaryColor,
  secondaryColor: primaryLight,
  thirdColor: primaryDark,

  background: lightGray,
  hoverColor: primaryColor,
  navigationColor: primaryLight,
};

export const darkTheme = {
  color: 'white',
  primaryColor: primaryDark,
  secondaryColor: primaryColor,
  thirdColor: primaryLight,

  background: darkGray,
  hoverColor: primaryLight,
  navigationColor: primaryColor,
};

export default createGlobalStyle`
  *,
  body,
  html {
    color: ${({ theme }) => theme.color};
  }
  body::before {
    background-color: ${({ theme }) => theme.background};
  }

  .card {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  .nav::after{
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  .nav {
    ul {
      li {
        *:hover {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }
  }

  .time-display {
    background-color: ${({ theme }) => theme.background};
  }

  .modal-dialog::before {
    background-color: ${({ theme }) => theme.secondaryColor};
  }

  .form-label {
    color: ${({ theme }) => theme.color};
  }

  .btn-primary {
    background-color: ${primaryColor};
  }
  
  .btn-secondary {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  
  .btn-dark {
    background-color: ${primaryDark};
  }  
`;
