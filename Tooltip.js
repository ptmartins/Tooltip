(function(toolTip) {

    let showTooltip = function(e) {
            let message = e.target.dataset.tooltip,
                domRect = e.target.getBoundingClientRect(),
                posX = Math.round(domRect.x),
                posY = Math.round(domRect.y) + Math.round(domRect.height) + 10; 
                
            renderTooltip(message, posX, posY);
        },
    
        renderTooltip = function(content, x, y) {
            var tooltip = document.createElement('div');
            tooltip.setAttribute('id', 'tooltip');
            tooltip.classList.add('tooltip', 'pop-over');
            tooltip.style.position = 'absolute';
            tooltip.style.left = x + 'px';
            tooltip.style.top = y + 'px';
            tooltip.textContent = content;
            
            document.body.appendChild(tooltip);
        },
        
        hideTooltip = function(ev) {
            var tooltip = document.getElementById('tooltip');
            document.body.removeChild(tooltip);
        },

        init = function() {
            let tooltips = document.getElementsByClassName('tooltip-data');

            for(var tooltip of tooltips) {
                tooltip.addEventListener('mouseenter', showTooltip, false);
                tooltip.addEventListener('mouseleave', hideTooltip, true);
            }
        };

    toolTip.init = init;

})(window.toolTip = window.toolTip || {})