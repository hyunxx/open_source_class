/* repository가 undefined인 경우 */
const object1 = {
    repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
    repository: {
        readme: undefined,
    },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
    repository: {
        readme: {
            extension: 'md',
            content: '금융을 쉽고 간편하게',
        }
    }
};


//내가 작성한 답안 + 수정
function safelyGet(object, path) {
    const properties = path.split('.'); //path 파악
    const current = object;

    //object부터 하나씩 차례대로 undefined 확인
    for (const property of properties) {
        if (current === undefined) {
            return undefined;
        }
        current = current[property];
    }
    return current; //최종값 return
}