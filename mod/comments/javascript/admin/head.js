<script type="text/javascript" src="javascript/jquery/jquery.js"></script>
<script type="text/javascript">

function punish_user(user_id, link, type)
{
    $.ajax({
             type: 'GET',
             url: 'index.php',
             data: 'module=comments&aop=' + type + '&id=' + user_id + '&authkey={authkey}',
             success: function(data) {
                 $(link).replaceWith(data);
             }
     });
}

</script>