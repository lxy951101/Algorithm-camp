class WordDictionary {
    constructor() {
        this.words = {};
    }
    addWord(word) {
        if (this.words[word.length]) {
            this.words[word.length].push(word);
        } else {
            this.words[word.length] = [word];
        }
    }
    search(word) {
        if (!this.words[word.length]) {
            return false;
        }
        const len = word.length;
        if (!word.includes('.')) {
            return this.words[len].includes(word);
        }
        // 否则是正则表达式，要先创建正则表达式对象
        const reg = new RegExp(word)

        // 只要数组中有一个匹配正则表达式的字符串，就返回true
        return this.words[len].some((item) => {
            return reg.test(item);
        })
    }
}