$('a.reminder').click(function(e){
    var title="Information";
    title=title.replace('<br>','');
    var reminder1 = "One account per group."
    var reminder2 = "You can add members in the <i>Account Settings</i> after you logged in to your account."
    $(this).popover({
        title: "<strong>"+title+"</strong>",
        content: "<table class='table justify' style='padding: 0; margin:0'><tr><td><strong>1.</strong></td> <td>"+reminder1+"</td></tr>  <tr><td><strong>2.</strong></td> <td>"+reminder2+"</td></tr> </table>", html: true
    });
    popoverrem=$(this);
    $(popoverrem).popover('show');
});

$('a.mor-submit').click(function(e){
    var title='<button type="submit" class="btn btn-success btn-sm" disabled><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Submit </button>';
    title=title.replace('<br>','');
    var reminder1 = "Submit to your Adviser for initial checking."
    $(this).popover({
        title: "<strong>"+title+"</strong>",
        content: "<table class='table justify' style='padding: 0; margin:0'> <tr> <td>"+reminder1+"</td></tr> </table>", html: true
    });
    popoverrem=$(this);
    $(popoverrem).popover('show');
});

$('a.mor-proceed').click(function(e){
    var title='<button type="button" class="btn btn-warning btn-sm disabled"><i class="fa fa-check"></i> Proceed</button>';
    title=title.replace('<br>','');
    var reminder1 = "Proceed to DP I with <i>this</i> title"
    $(this).popover({
        title: "<strong>"+title+"</strong>",
        content: "<table class='table justify' style='padding: 0; margin:0'> <tr> <td>"+reminder1+"</td></tr> </table>", html: true
    });
    popoverrem=$(this);
    $(popoverrem).popover('show');
});