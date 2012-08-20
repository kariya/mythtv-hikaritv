#!/bin/sh

JAVA_CMD="/usr/bin/java"
#JAVA_OPTS="-Dhttp.agent=Mozilla/5.0"
JAVA_OPTS=""
JAVA_CLASSPATH="/usr/share/java/js.jar:/usr/share/java/jline.jar:../lib/jsoup-1.6.3.jar:../lib/jmythapi-1.0.1.jar"
JAVA_MAIN="org.mozilla.javascript.tools.shell.Main"

## 
## Remove bootclasspath overriding for OpenJDK since
## it now use a mangled version of Rhino (in sun.org.mozilla.rhino package)
##
## References:
## <https://bugs.launchpad.net/ubuntu/+source/openjdk-6/+bug/255149>
## <http://icedtea.classpath.org/bugzilla/show_bug.cgi?id=179>
## <http://www.openoffice.org/issues/show_bug.cgi?id=91641>
##

$JAVA_CMD $JAVA_OPTS -classpath $JAVA_CLASSPATH $JAVA_MAIN "$@"
