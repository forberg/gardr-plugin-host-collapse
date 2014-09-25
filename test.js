var assert = require('assert');
var collapse = require('./index.js');
var PluginApi = require('gardr-core-plugin').PluginApi;


function mockItem(width, height) {
    return {
        rendered: {
            width: width,
            height: height
        },
        options: {
            container: {
                style: {
                    display: 'block'
                }
            }
        }
    };
}

describe('Collapse plugin', function() {
    var pluginApi;
    var options = {
        collapseIfWidthLessThan: 15,
        collapseIfHeightLessThan: 15
    };


    beforeEach(function() {
        pluginApi = new PluginApi();
    })

    it('should collapse section if height smaller than default value 10 px', function() {
        var item = mockItem(100, 9);

        collapse(pluginApi);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'none', 'Display should be none');
    });

    it('should collapse section if width smaller than default value 10 px', function() {
        var item = mockItem(9, 100);

        collapse(pluginApi);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'none', 'Display should be none');
    });

    it('should not collapse section if width and height are larger than default 10 px', function() {
        var item = mockItem(100, 100);

        collapse(pluginApi);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'block', 'Display should be block');
    });

    it('should collapse section if width smaller than value provided in options', function() {
        var item = mockItem(14, 140);

        collapse(pluginApi, options);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'none', 'Display should be none');
    });

    it('should collapse section if height smaller than value provided in options', function() {
        var item = mockItem(140, 14);

        collapse(pluginApi, options);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'none', 'Display should be none');
    });

    it('should not collapse section if width and height larger than values provided in options', function() {
        var item = mockItem(100, 100);

        collapse(pluginApi, options);
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.display, 'block', 'Display should be block');
    });
})
