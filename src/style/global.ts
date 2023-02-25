import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');



:root {

/* Primary Palette */

    --color-primary: #27AE60
    --color-primary-50: #93D7AF
    --color-secundary: #EB5757

/* Gray Scale Palette */

    --gray-100: #333333
    --gray-50: #828282
    --gray-20: #E0E0E0
    --gray-0: #F5F5F5
    --white: #FFFFFF
    
/* Feedback Palette */

    --Negative: #E60000
    --Warning: #FFCD07
    --Sucess: #168821
    --Information: #155BCB


/* Typography */

    --main-font: 'Inter', sans-serif;
}

*{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
  }
`;
