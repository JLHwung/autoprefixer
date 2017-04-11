const Declaration = require('../declaration');

class TextEmphasisPosition extends Declaration {
    static initClass() {
        this.names = ['text-emphasis-position'];
    }

    set(decl, prefix) {
        if (prefix === '-webkit-') {
            decl.value = decl.value.replace(/\s*(right|left)\s*/i, '');
            return super.set(decl, prefix);
        } else {
            return super.set(decl, prefix);
        }
    }
}
TextEmphasisPosition.initClass();

module.exports = TextEmphasisPosition;