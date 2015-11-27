# Codelab

## 1. Hello world  
Meteor 플랫폼을 설치하고, 프로젝트를 생성합니다

### Meteor 설치
console에서 다음과 같은 명령어를 실행합니다.

*OS X 또는 Linux에서*  

```bash
curl https://install.meteor.com/ | sh
```

*Windows에서*  

[공식 Window Installer](https://install.meteor.com/windows)를 다운로드하여 설치합니다.  

###  프로젝트 생성

`SHINE` 프레임워크는 프로젝트 디렉토리의 하위에 앱 디렉토리가 존재합니다.  
전형적인 구조는 다음과 같습니다:

    
    /project-home
        /apps
            /admin
            /front
            /mobile
            /packages
        /bin
        /build
        /docs
        /release
    

여기서는 모바일 앱을 만들 예정이므로 당장 필요한 디렉토리 구조만 구성하겠습니다.

다음과 같은 디렉토리 구조를 만듭니다:   

    
    /shine
        /apps  
            /packages
        /bin  
    
    
    
`/shine/apps` 디렉토리에서 다음 명령어를 실행하면 
`mobile`이라는 이름의 하위 디렉토리가 만들어지고 거기에 Meteor 프로젝트가 생성됩니다.  

    
    meteor create mobile
    

디렉토리 구조는 다음과 같이 될 것입니다:

    
    /shine
        /apps
            /mobile
            /packages
        /bin
    

프로그램의 실행은 해당 디렉토리(`/shine/apps/mobile`)로 이동하여 `meteor`를 실행합니다:

    
    cd mobile
    meteor
    

정상적으로 실행이 되면 console에 앱이 실행중이라는 메시지가 화면에 나타납니다.  
그러면, 브라우저를 열고 주소창에 `http://localhost:3000/` 주소를 입력하면 
브라우저 화면에 `Hello world` 페이지가 나타나는 것을 볼 수 있습니다.


## 2. React, ReactRouter & Layout

이 단계에서는 Meteor 프로젝트에 React, ReactRouter를 설치하고 기본 화면 구성을 합니다.

### React 설치

`mobile` 앱 디렉토리에서 다음 명령어를 실행하여 패키지를 import합니다.

    
    meteor add react
    
### ReactRouter 설치  

같은 방법으로 다음 명령어를 실행하면 ReactRouter를 import할 수 있습니다.

    
    meteor add reactrouter:react-router
    meteor add reactrouter:react-router-ssr
        

React의 경우는 npm 라이브러리를 이용하므로 이를 Meteor에서 사용할 수 있게 해주는 패키지를 추가로 import 합니다:

    
    meteor add meteorhacks:npm 
    meteor add cosmos:browserify
    

이것으로 필요한 라이브러리는 모두 import 하였습니다.  
이 상태에서 앱을 실행하면 간단한 오류 메시지를 내면서 종료합니다.    
다시 한 번 실행하면 앱이 정상적으로 실행됩니다.  

### 파일 구조

`SHINE`의 Metor 앱 파일 구조는 다음과 같은 형태를 가집니다:

    
    /app-home
        /client
        /packages
        /private
        /public
        /server
        /shared
            /0
            /modules
                /_layout
                /about
                /home
    
    
위와 같은 파일 구조를 구성한 다음, Layout.jsx, About.jsx, Home.jsx 파일을 작성합니다.

그리고 `/client/main.html` 파일을 작성합니다.

`/client/style.css` 파일은 앱의 스타일을 지정하는 것으로 그대로 복사하여 저장합니다.

앱을 실행하여 정상적으로 작동하는 것을 확인하십시오.  

이것으로 Meteor + React 기반으로 앱이 동작하는 것을 볼 수 있습니다.  

## 3. CSS, Less & Bootstrap

`SHINE`의 스타일은 `Less`와 `Bootstrap` 기반으로 이루어져 있습니다.
그리고, 아이콘 라이브러리 `fontawesome`을 사용합니다.
 
먼저 `less`와 `fontawesome` 패키지를 import 합니다:

    
    meteor add less
    meteor add fortawesome:fontawesome
    

`Bootstrap`의 경우는 `CSS` 파일이 아닌 `Less` 파일을 이용하기 위하여, `Bootstrap` 배포본이 아니라 
소스에서 `Less` 파일들을 가져와서 설치합니다.

이제 다시 앱을 실행하면, `Bootstrap` 스타일이 적용된 모습을 볼 수 있습니다.  

 
## 4. Package

위에서 만든 `Bootstrap` 모듈을 독립된 패키지로 만들어봅니다.

`/apps/packages` 디렉토리로 이동하여 다음 명령어를 실행합니다.

    
    meteor create --package shinejs:boostrap-less
    

여기에 위의 관련 파일들을 이곳으로 옮겨 구성합니다.

`/apps/mobile/packages` 디렉토리로 이동하여 여기에 Symlink를 구성합니다.

    
    ln -s ../../packages/meteor-bootstrap-less meteor-bootstrap-less
    
그러면 이제 `mobile` Meteor 앱에서 `shinejs:bootstrap-less` 패키지를 이용할 수 있습니다.  

## 5. Animations

`SHINE`에서 애니메이션은 우선 2 가지를 구현합니다.  

첫째, 왼쪽의 사이드 바에 대한 애니메이션입니다. 
상단의 헤더의 바 아이콘 버튼을 클릭할 때 왼쪽의 사이드바가 나타났다 사라지도록 구현합니다.  

둘째, 화면의 링크를 클릭하여 화면이 다른 화면으로 이동할 때의 애니메이션을 구현합니다.
경우에 따라서 화면이 페이드인, 아웃되면서 나타나거나 사라지도록 구현하고,
때로는 좌우로 이동하면서 나타나거나 사라지도록 구현합니다.
 
이 두 가지 모두 CSS의 `transform`을  이용한 애니메이션으로 구현하지만, 그 방식은 다릅니다.
 
사이드바의 경우는 해당 아이콘 버튼을 누를 때, 화면 컨테이너 엘리먼트의 스타일을 토글하는 방식으로 구현하지만, 
페이지 이동의 경우는 `React`에서 제공하는 `CSSTransitionGroup` 컴포넌트를 이용하여 구현합니다.

`RouteTransition` 컴포넌트는 `CSSTransitionGroup`을 이용하여 직접 제작한 컴포넌트로 
개발자가 페이지 이동에 별도의 프로그래밍이 필요없이 자동적으로 애니메이션이 이루어지도록 구현된 컴포넌트입니다.
 



