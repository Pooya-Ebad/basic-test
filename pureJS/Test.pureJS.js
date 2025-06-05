class TestApp {
    constructor() {
        this.suits = []
    }
    describe(description, callback){
        const suit = {
            description,
            tests : [],
            beforeHook : [],
            afterHook : []
        }
        this.suits.push(suit)
        callback(suit)
    }
    it (name, callback){
        const suit = this.suits[this.suits.length - 1]
        suit.tests.push({
            name,
            callback
        })
    }
    before(callback) {
        const suit = this.suits[this.suits.length - 1]
        suit.beforeHook.push(callback)
    }
    after(callback) {
        const suit = this.suits[this.suits.length - 1]
        suit.afterHook.push(callback)
    }
    async run(){
        console.log(`test tool for unit-test`);
        let passed = 0;
        let failed = 0;
        for(const suit of this.suits){
            console.log(`${suit.description}`);
            for(const hook of suit.beforeHook){
                await hook()
            }
            for (const test of suit.tests) {
                try {
                    await test.callback()
                    console.log(`✅${test.name}`);
                    passed += 1
                } catch (error) {
                    console.log(`❌${test.name}`);
                    console.log(`❌${error.message}`);
                    failed += 1
                }
            }
            for (const hook of suit.afterHook) {
                await hook()
            }
            console.log(`${passed} test passed ✅`);
            console.log(`${failed} test failed ❌`);
        }
    }
}