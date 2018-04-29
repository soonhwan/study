'''
리스트형(list)
리스트형은 다른 언어의 배열 같은 것이다.
JAVA의 ArratList와 유사하다.
파이썬의 리스트는 대괄호에([]) 표시한다.
배열이나 리스트는 index가 있다.

중괄호({})는 딕셔너리다.
딕셔너리는 Map 구조이다.
MAp 구조는 Kep:value 의 쌍으로 요소가 구성된다
Map 구조에서는 중복된 키가 없다.
자바스크립트의 JSON과 거의 유사하다.
{"성명":"홍길동","주소":"서울시 은평구","나이":33}

파이썬의 대표적인 자료구조는
리스트, 튜플, 딕셔너리, 셋이다.
- 셋은 키도 없고 인덱스도 없으며 값의 중복이 없다.
- 리스트와 튜플은 거의 같은 구조인데 튜플은 수정 불가능
- 파이썬에서는 문자열과 튜플은 직접 수정 불가능
'''

intList = [10,20,30,40,50]
movieList = ["시네마천국", "혐오스런마치코일생","혹성탈출","태권V","은하철도999"]
i=0                     # 초기식
while i <len(intList):  # 조건식
    print(intList[i], end="\t")
    i += 1              # 증감식 - 증감식이 붙어야 조건 변한다.
                        # 증가하고 다시 비교
print("\n")

for movie in movieList: # ramge()함수 대신 리스트 사용
    print(movie)
print("\n")

for i, mov in enumerate(movieList):
    print(i, mov)