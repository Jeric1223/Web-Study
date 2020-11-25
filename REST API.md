## REST API

* ### API란? 

데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는것.

* ### REST API의 정의

  * REST기반으로 서비스 API를 구현한 것
  * 최근 OpenAPI, 마이크로 서비스등을 제공하는 업체 대부분은 REST API를 제공한다.

* ### REST API의 특징 

  * 사내 시스템들도 REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지보수 및 운용을 편리하게 할 수 있다.
  * REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다.
  * 즉, REST API를 제작하면 델파이 클라이언트 뿐 아니라, 자바 , C#, 웹 등을 이용해 클라이언트를 제작할 수 있다.

* ### REST API 설계 기본 규칙

  * URI는 정보의 자원을 표현해야 한다.
    * resource는 동사보다는 명사를, 대문자보다는 소문자를 사용한다.
    * resource의 도큐먼트 이름으로는 단수 명사를 사용해야 한다.
    * resource의 컬렉션 이름으로는 복수 명사를 사용해야 한다.
    * resource의 스토어 이름으로는 복수 명사를 사용해야 한다.
      * Ex) GET /Member/1 -> GET /members/1
    * 자원에 대한 행위는 HTTP Method(GET, PUT, POST, DELETE 등)로 표현한다.
      * URI에 HTTP Method가 들어가면 안된다.
        	Ex) GET /members/delete/1 -> DELETE /members/1
      * URI에 행위에 대한 동사 표현이 들어가면 안된다.(즉, CRUD 기능을 나타내는 것은 URI에 사용하지 않는다.)
        	Ex) GET /members/show/1 -> GET /members/1
        	Ex) GET /members/insert/2 -> POST /members/2
      * 경로 부분 중 변하는 부분은 유일한 값으로 대체한다.(즉, :id는 하나의 특정 resource를 나타내는 고유값이다.)
            Ex) student를 생성하는 route: POST /students
            Ex) id=12인 student를 삭제하는 route: DELETE /students/12


```MD
|제목|내용|설명|
|------|---|---|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|
```

| METHOD | 역할                                                         |
| ------ | ------------------------------------------------------------ |
| POST   | POST를 통해 해당 URI를 요청하면 리소스를 생성합니다.         |
| GET    | GET를 통해 해당 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다 |
| PUT    | PUT를 통해 해당 리소스를 수정합니다.                         |
| DELETE | DELETE를 통해 리소스를 삭제합니다.                           |

