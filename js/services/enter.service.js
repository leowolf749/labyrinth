module.exports = {
    name: 'EnterService',
    func: function ($state) {
        return {
            enter () {
                console.log('you have entered the labyrinth')
            }
        }
    }
}