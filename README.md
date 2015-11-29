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

`SHINE`에서 애니메이션은 크게 세 가지를 구현합니다.  

첫째, 왼쪽의 사이드 바에 대한 애니메이션입니다. 
상단의 헤더의 바 아이콘 버튼을 클릭할 때 왼쪽의 사이드바가 나타났다 사라지도록 구현합니다.  

둘째, 화면의 링크를 클릭하여 화면이 다른 화면으로 이동할 때의 애니메이션을 구현합니다.
경우에 따라서 화면이 페이드인, 아웃되면서 나타나거나 사라지도록 구현하고,
때로는 좌우로 이동하면서 나타나거나 사라지도록 구현합니다.

셋째, Overlay 팝업 화면의 애니메이션을 구현합니다.

이 세 가지 모두 CSS의 `transform`을  이용한 애니메이션으로 구현하지만, 그 방식은 다릅니다.
 
사이드바의 경우는 해당 아이콘 버튼을 누를 때, 화면 컨테이너 엘리먼트의 스타일을 토글하는 방식으로 구현하지만, 
페이지 이동의 경우는 `React`에서 제공하는 `CSSTransitionGroup` 컴포넌트를 이용하여 구현합니다.

`RouteTransition` 컴포넌트는 `CSSTransitionGroup`을 이용하여 직접 제작한 컴포넌트로 
개발자가 페이지 이동에 별도의 프로그래밍이 필요없이 자동적으로 애니메이션이 이루어지도록 구현된 컴포넌트입니다.

Overlay 팝업 화면의 경우는 `CSSTransitionGroup`을 사용하지만, `ReactRouter`를 통과하지 않는 방식으로 구현됩니다.
이를 위해서 직접 컴포넌트를 렌더링하고 사용자 입력에 따라서 컴포넌트를 `unmount` 하기 위하여 `Promise`를 사용합니다.

Overlay 팝업에서 지원되는 화면에는 alert, confirm, page, notify 가 있습니다.  

### Internationalization

잠시 화제를 돌려 다국어 지원 기능을 소개합니다.

`SHINE`은 기본적으로 다국어 버전을 만들 수 있도록 구현되어 있습니다.  

자체 개발한 `i18n` 패키지가 있어, 이를 이용하면 쉽게 다국어 버전을 만들 수 있습니다.

## 6. SHINE Architecture

### Module

Meteor는 파일 구조를 개발자의 자율로 다양하게 설계할 수 있도록 자유도를 높여 주고 있습니다.  
Meteor Document를 보면 파일 구조에 대한 [몇 가지 패턴](http://docs.meteor.com/#/full/structuringyourapp)을 보여줍니다.

`SHINE`은 여기서 첫 번째 방식을 채택하였습니다.  
앱의 기능 단위로 독립된 디렉토리에 모든 연관 소스를 두는 방식입니다.  
이를 `module`이라 부릅니다.

`SHINE` 소스의 `/shared/modules` 디렉토리에 `module`이 자리합니다. 
각 `module`의 구조는 다음과 같습니다. (예시로 `post` 모듈의 경우)

    
    /client
        PostList.jsx
        PostListContainer.jsx
        PostView.jsx
        PostViewContainer.jsx
        PostForm.jsx
        PostNewContainer.jsx
        PostEditContainer.jsx
        
    /lib
        post_model.js
        post_validator.js
        
    /server
        post_publish.js
    

### Pub/Sub

`Pub/Sub`은 서버에 데이터를 요청하고 그 결과를 받는 기능을 수행합니다.  

클라이언트에서 `Meteor.subscribe(name, options)` 요청을 보내면 
서버쪽에서는 이 요청이 `Meteor.publish(name, options)` 함수로 전달됩니다. 
 
서버쪽에서 이 함수를 구현하여 요청을 처리하는 결과를 리턴하면, 
그 결과는 클라이언트의 `Minimongo`에 저장되고 서버에서 해당 Collection의 데이터에 변경이 발생할 때마다 
그 변경 결과를 자동으로 클라이언트로 내려주어 동기화를 수행합니다.  

`Publish`는 `/server/post_publish.js` 파일에 구현되어 있습니다.
`Subscription`은 클라이언트에서 구현하는데 React의 경우에는 React 컴포넌트에서 이를 구현해야 합니다.  
 
React 컴포넌트가 화면을 그리는 HTML 코드를 생성하는 기능도 하고, 위와 같이 서버와의 통신도 수행해야 하므로 
상당히 복잡한 구조를 가지게 됩니다. 그래서 이를 분리하여 구현하는 패턴을 권장합니다.  

위의 예에서 `PostList.jsx`는 화면에 그릴 템플릿만 구성하고, 
여기에 요구되는 데이터를 서버로부터 가져오는 기능은 `PostListContainer.jsx`에 구현하는 방식입니다.  
  
이와 같은 방식으로 List, View 등의 화면을 구현할 수 있습니다.
  
### Spinner
`Pub/Sub`을 구현하게 되면 클라이언트에서 서버에 데이터를 요청하고, 서버가 그 결과를 클라이언트로 전송하는 시간이 소요됩니다.  
  
이 시간동안 클라이언트의 화면이 정지해 있을 수는 없으므로 이 시간동안 현재 서버로 데이터를 요청하여 전송을 기다리는 중이라는 상태 화면을 보여주게 됩니다.

이것을 Spinner 컴포넌트로 구현합니다.

`shinejs:react-spinner`는 [`spin.js`](http://fgnass.github.io/spin.js/) 를 Meteor-React에서 사용할 수 있도록 구현한 패키지입니다.
우리는 이 패키지를 사용하여 용도에 따라 몇 가지 wrapper를 적용하여 사용합니다.


### accounts-ui 패키지
Meteor에서는 회원 가입, 로그인 등의 기능을 코어에서 기본 제공합니다.

`accounts-ui` 관련 패키지들은 비밀번호 기반의 `accounts-password`이외에도 각종 OAuth 서비스를 제공하는 
Facebook, Twitter, Google, GitHub 등의 계정에 대하여 OAuth 기능을 기본으로 제공합니다.

`SHINE`은 이 `accounts-ui` 패키지를 React 컴포넌트로 구현한 `shinejs:react-accounts-ui`를 구현하였습니다.

