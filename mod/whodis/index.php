<?php

/**
 * @version $Id$
 * @author Matthew McNaney <mcnaney at appstate dot edu>
 */


if (Current_User::allow('whodis')) {
    \core\Core::initModClass('whodis', 'Whodis.php');
    Whodis::admin();
}

?>