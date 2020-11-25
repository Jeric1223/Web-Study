## fetch

웹브라우저(프론트엔드)에서 정보를 입력받았다.
그러면 그 정보를 서버로 보내줘야 한다.

### 요청(request), 응답(response)

기본적으로 http는 요청(request), 응답(response)가 한 세트다.
그러면 그것을 어떻게 해야되느냐. 그 중 한 방법이 fetch함수(javascript내장함수이다)를 이용할 것이다.

~~~javascript
/// post용 ///

// fetch 후 alert 메세지용 //
  welcomeAlert() {alert("westagram 회원이 되신 것을 축하드립니다!")}
  alreadyUserAlert() {alert("이미 존재하는 회원입니다.ㅠㅠ")}
  serverErrorAlert() {alert("알 수 없는 오류가 발생했습니다.")}
  
  // signup에서 login으로 이동시킬 fetch 함수 //
  goToLogin() {
    fetch('http://10.58.4.56:8000/account/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "username": this.state.name,
        "password": this.state.password               
      })
    })    
    .then(res => {
      if (res.status === 200) {
        this.welcomeAlert();
        this.props.history.push('/'); 
      }
      if (res.status === 401) {
        this.alreadyUserAlert();
      }
      if (res.status === 400) {
        this.serverErrorAlert()
      }     
    })    
  }

/// get용 ///
 fetFunc() {
    const token = localStorage.getItem('token');
    fetch("http://10.58.1.192:8000/comment", {
      headers: {
        "Authorization":token,
      }
    })
    // .then((res) => console.log(res))
    .then((response) => response.json())
    .then((res) => this.setState({comment:res.data}, () => console.log(this.state)))
  }

~~~

예시 회원가입을 위한 js 파일 



fetch함수는 프론트엔드에서 서버로 보내는 함수이다.

서버와 서버가 데이터를 주고받는것은 여러포맷의 문서가 있지만 현재는 json만을 생각한다.

fetch()안에 보낼 것들을 넣어 보낸다. 기본적으로 get,post 어떤 method방식으로 보내더라더 필수로 필요한 것은 받을 주소이다.

http프로토콜+도메인주소(또는 ip주소)+포트(도메인의경우 기본설정되면 생략될 수도)+엔드포인트이다.

header는 메타 데이터, body는 전달할 데이터

then() 메서드는 promise를 리턴하는것인데. 즉 fetch로서 요청을 하고 응답이 왔을 때라는 약속을 하는 것임.