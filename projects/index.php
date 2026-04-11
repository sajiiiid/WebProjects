<?php
for ($i = 1; $i <= 8; $i++) {
    echo str_repeat(" ",4 - $i) . str_repeat("*", $i) . str_repeat(" ",4 - $i) . "\n" ;
}
?>