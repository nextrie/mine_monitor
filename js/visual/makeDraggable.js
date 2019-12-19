function makeDivHeightDraggable(divClass, minHeight, maxHeight)
{
    $("." + divClass).resizable({
        handles: 's',
        minHeight: minHeight,
        maxHeight: maxHeight
    });
}

function makeDivWidthDraggable(divClass, minWidth, maxWidth)
{
    $("." + divClass).resizable({
        handles: 'w',
        minWidth: minWidth,
        maxWidth: maxWidth
    });
}