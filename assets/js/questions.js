var questionArr = [
    {
 //QUESTION 1
    question:  "Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination?",
    firstOption: " /etc/keys ",
    secondOption: "/proc/keys", 
    thirdOption: "/etc/inittab", 
    fourthOption: "/proc/inittab", 
    correctAnswer: "#third-option"
    },     {
    
    //QUESTION 2
    question:  "Which of the following information is stored within the BIOS?",
    firstOption: "Boot device order",
    secondOption: "Linux kernel version",
    thirdOption: "Timezone",
    fourthOption: "The system's hostname",
    correctAnswer: "#first-option"

},     {

    //QUESTION 3
    question:  "Which of the following commands reboots the system when using SysV init? (Choose TWO correct answers",
    firstOption: "shutdown -r now",
    secondOption: "shutdown -r 'rebooting'",
    thirdOption: "telinit 5",
    fourthOption: "telinit 0",
    correctAnswer: "#first-option"


},     {
    //QUESTION 4
    question:  "Which of the following are init systems used within Linux systems?",
    firstOption: "startd",
    secondOption: "systemd", 
    thirdOption: "Upstartd",
    fourthOption: "SysInit",
    correctAnswer: "#second-option"

},        {

    //QUESTION 7
    question:  "Which of the following commands brings a system running SysV init into a state in  which it is safe to perform maintenance tasks?",
    firstOption: "A. shutdown -R 1 now ",
    secondOption: "shutdown -single now",
    thirdOption: "init 2",
    fourthOption: "telinit 1",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 8
    question: "What is the first program that is usually started, at boot time, by the Linux kernel when using SysV init?",
    firstOption: "/lib/init.so",
    secondOption: "/sbin/init",
    thirdOption: "/etc/rc.d/rcinit",
    fourthOption: "/proc/sys/kernel/init", 
    correctAnswer: "#second-option"
},     {


    //QUESTION 10
    question:  "Which of the following commands will write a message to the terminals of all logged in users?",
    firstOption: "bcast", 
    secondOption: "mesg", 
    thirdOption: "print", 
    fourthOption: "wall", 
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 11
    question:  "Which of the following kernel parameters instructs the kernel to suppress most boot messages?",
    firstOption: "silent",
    secondOption: "verbose=0", 
    thirdOption: "nomesg", 
    fourthOption: "quiet",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 12
    question:  "Which of the following options for the kernel's command line changes the systemd boot target to rescue.target instead of the default target?",
    firstOption: "systemfourthOption:target=rescue.target",
    secondOption: "systemfourthOption:runlevel=rescue.target",
    thirdOption: "systemfourthOption:service=rescue.target",
    fourthOption: "systemfourthOption:default=rescue.target",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 13
    question: "After modifying GNU GRUB's configuration file, Which command must be run for the changes to take effect?",
    firstOption: "kill -HUP $(pidof grub)", 
    secondOption: "grub-install",
    thirdOption: "grub",
    fourthOption: "No action is required",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 14
    question:  "Which of the following commands is used to update the list of available packages when using dpkg based package management?",
    firstOption: "apt-get update",
    secondOption: "apt-get upgrade",
    thirdOption: "apt-cache update", 
    fourthOption: "apt-get refresh",
    correctAnswer: "#first-option"


},     {

    //QUESTION 15
    question:  "Which of the following commands can be used to download the RPM package kernel without installing it?",
    firstOption: "yum download --no-install kernel", 
    secondOption: "yumdownloader kernel",
    thirdOption: "rpm --download --package kernel",
    fourthOption: "rpmdownload kernel",
    correctAnswer: "#second-option"

},         {

    //QUESTION 17
    question:  "Which of the following is correct when talking about mount points?",
    firstOption: "Every existing directory can be used as a mount point.",
    secondOption: "Only empty directories can be used as a mount point.",
    thirdOption: "Directories need to have the SetUID flag set to be used as a mount point.",
    fourthOption: "Files within a directory are deleted when the directory is used as a mount point.",
    correctAnswer: "#first-option"

},     {

    //QUESTION 18
    question:  "Which function key is used to start Safe Mode in Windows NT?",
    firstOption: "F10",
    secondOption: "F8",
    thirdOption: "F6",
    fourthOption: "Windows NT does not support Safe Mode",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 19
    question:  "Which of the following environment variables overrides or extends the list of directories holding shared libraries?",
    firstOption: "LD_LOAD_PATH",
    secondOption: "LD_LIB_PATH",
    thirdOption: "LD_LIBRARY_PATH", 
    fourthOption: "LD_SHARE_PATH", 
    correctAnswer: "#third-option"


},     {


    //QUESTION 21
    question:  "Which RPM command will output the name of the package which supplied the file /etc/exports?",
    firstOption: "rpm -F /etc/exports", 
    secondOption: "rpm -qf /etc/exports", 
    thirdOption: "rpm -Kl /etc/exports", 
    fourthOption: "rpm -qp /etc/exports",
    correctAnswer: "#second-option"

},     {

    //QUESTION 24
    question:  "When removing a package, which of the following dpkg options will completely remove the files including configuration files?",
    firstOption: "--clean", 
    secondOption: "--delete", 
    thirdOption: "--purge",
    fourthOption: "remove",
    correctAnswer: "#third-option"

},     {
    //QUESTION 25
    question:  "Which file should be edited to select the network locations from which Debian installation package files are loaded?",
    firstOption: "/etc/dpkg/dpkg.cfg", 
    secondOption: "/etc/apt/apt.conf",
    thirdOption: "/etc/apt/apt.conf.d",
    fourthOption: "/etc/apt/sources.list",
    correctAnswer: "#fourth-option" 

},     {


    //QUESTION 29
    question:  "Which of the following commands overwrites the bootloader located on /dev/sda without overwriting the partition table or any data following it?",
    firstOption: "dd if=/dev/zero of=/dev/sda bs=512",
    secondOption: "dd if=/dev/zero of=/dev/sda bs=512 count=1", 
    thirdOption: "dd if=/dev/zero of=/dev/sda bs=440 count=1",
    fourthOption: "dd if=/dev/zero of=/dev/sda bs=440",
    correctAnswer: "#third-option"

},     {

    //QUESTION 30
    question:  "Which of the following commands can be used to create a USB storage media from a disk image?",
    firstOption: "gdisk", 
    secondOption: "dd",
    thirdOption: "cc",
    fourthOption: "fdisk",
    correctAnswer: "#second-option" 

},     {

    //QUESTION 31
    question: "In Bash, inserting 1>&2 after a command redirects",
    firstOption: "standard error to standard input.",
    secondOption: "standard input to standard error.", 
    thirdOption: "standard output to standard error.",
    fourthOption: "standard error to standard output.",
    correctAnswer: "#third-option"
},     {


    //QUESTION 32
    question: "What command will generate a list of user names from /etc/passwd along with their login shell?",
    firstOption: "column -s : 1,7 /etc/passwd", 
    secondOption: "chop -c 1,7 /etc/passwd",
    thirdOption: "colrm 1,7 /etc/passwd",
    fourthOption: "cut -d: -f1,7 /etc/passwd",
    correctAnswer: "#fourth-option"
},     {

    //QUESTION 33
    question:  "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
    firstOption: "-dirmax",
    secondOption: "-maxdepth", 
    thirdOption: "-maxlevels", 
    fourthOption: "-n",
    correctAnswer: "#second-option"

},     {

    //QUESTION 34
    question:  "Which of the following statements is correct regarding the command foo 1> bar?",
    firstOption: "The stdout from the command foo is appended to the file bar.",
    secondOption: "The stdout from the command foo overwrites the file bar.",
    thirdOption: "The command foo receives its stdin from the file bar.",
    fourthOption: "The command foo receives its stdin from the stdout of the command bar.", 
    correctAnswer: "#second-option"

},     {


    //QUESTION 35
    question:  "Which of the following commands kills the process with the PID 123 but allows the process to 'clean up' before exiting?",
    firstOption: "kill -PIPE 123", 
    secondOption: "kill -KILL 123", 
    thirdOption: "kill -STOP 123", 
    fourthOption: "kill -TERM 123",
    correctAnswer: "#fourth-option"
    
},     {



    //QUESTION 37
    question: "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
    firstOption: "9", 
    secondOption: "19", 
    thirdOption: "49", 
    fourthOption: "99",
    correctAnswer: "#second-option"
},     {


    //QUESTION 38
    question:  "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, Which single character command will insert the deleted content below the current line?",
    firstOption: "i (lowercase)", 
    secondOption: "P (uppercase)", 
    thirdOption: "p (lowercase)", 
    fourthOption: "U (uppercase)", 
    correctAnswer: "#third-option"

},     {


    //QUESTION 39
    question:  "A user accidentally created the subdirectory \dir in his home directory.Which of the following commands will remove that directory?",
    firstOption: "rmdir '~/\dir'",
    secondOption: "rmdir '~\dir'", 
    thirdOption: "rmdir ~/'dir'", 
    fourthOption: "rmdir ~/\\dir",
    correctAnswer: "#fourth-option"


},     {

    //QUESTION 40
    question: "In compliance with the FHS, in  Which of the directories are man pages found?",
    firstOption: "/usr/share/man",
    secondOption: "/opt/man",
    thirdOption: "/usr/doc/",
    fourthOption: "/var/pkg/man", 
    correctAnswer: "#first-option"

},     {

    //QUESTION 41
    question:  "Which of the following commands will send output from the program myapp to both standard output (stdout) and the file file1.log?",
    firstOption: "cat < myapp | cat > file1.log", 
    secondOption: "myapp 0>&1 | cat > file1.log",
    thirdOption: "myapp | cat > file1.log",
    fourthOption: "myapp | tee file1.log",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 42
    question: "What is the purpose of the Bash built-in export command?",
    firstOption: "It allows disks to be mounted remotely.",
    secondOption: "It runs a command as a process in a subshell.",
    thirdOption: "It makes the command history available to subshells.",
    fourthOption: "It sets up environment variables for applications.",
    correctAnswer: "#fourth-option"


},     {

    //QUESTION 43
    question: "What is the output of the following command? echo 'Hello World' | tr -d aieou",
    firstOption: "Hello World", 
    secondOption: "eoo",
    thirdOption: "Hll Wrld",
    fourthOption: "eoo Hll Wrld",
    correctAnswer: "#third-option"

},     {

    //QUESTION 44
    question:  "Which of the following characters can be combined with a separator string in order to read from the current input source until the separator string, which is on a separate line and without any trailing spaces, is reached?",
    firstOption: "<<",
    secondOption: "<|", 
    thirdOption: "!< ",
    fourthOption: "&<",
    correctAnswer: "#first-option"

},     {

    //QUESTION 45
    question:  "Which of the following commands will NOT update the modify timestamp on the file /tmp/myfile.txt?",
    firstOption: "file /tmp/myfile.txt",
    secondOption: "echo 'Hello' >/tmp/myfile.txt",
    thirdOption: "sed -ie 's/1/2/' /tmp/myfile.txt",
    fourthOption: "echo -n 'Hello' >>/tmp/myfile.txt",
    correctAnswer: "#first-option" 


},     {

    //QUESTION 46
    question: "What is the default nice level when a process is started using the nice command?",
    firstOption: "-10", 
    secondOption: "10", 
    thirdOption: "20", 
    fourthOption: "0",
    correctAnswer: "#second-option"


},     {
    //QUESTION 47
    question: "What is the default action of the split command on an input file?",
    firstOption: "It will break the file into new files of 1,024 byte pieces each.",
    secondOption: "It will break the file into new files of 1,000 line pieces each.",
    thirdOption: "It will break the file into new files of 1,024 kilobyte pieces each.",
    fourthOption: "It will break the file into new files that are no more than 5% of the size of the original file.",
    correctAnswer: "#second-option"


},     {
    //QUESTION 48
    question: "What is the difference between the i and a commands of the vi editor?",
    firstOption: "i (interactive) requires the user to explicitly switch between vi modes whereas a (automatic) switches modes automatically.",
    secondOption: "i (insert) inserts text before the current cursor position whereas a (append) inserts text after the cursor.",
    thirdOption: "i (independent rows) starts every new line at the first character whereas a (aligned rows) keeps the indentation of the previous line.", 
    fourthOption: "i (interrupt) temporarily suspends editing of a file to the background whereas a (abort) terminates editing.",
    correctAnswer: "#second-option"

},     {

    //QUESTION 50
    question:  "Which of the following commands moves and resumes in the background the last stopped shell job?",
    firstOption: "run", 
    secondOption: "bg",
    thirdOption: "fg", 
    fourthOption: "back",
    correctAnswer: "#second-option"

},     {

    //QUESTION 51
    question: "What is the effect of the egrep command when the -v option is used?",
    firstOption: "It enables color to highlight matching parts.",
    secondOption: "It only outputs non-matching lines.",
    thirdOption: "It shows the command's version information.",
    fourthOption: "It changes the output order showing the last matching line first.",
    correctAnswer: "#second-option"

},     {

    //QUESTION 52
    question: "What does the ? symbol within regular expressions represent?",
    firstOption: "Match the preceding qualifier one or more times.", 
    secondOption: "Match the preceding qualifier zero or more times.", 
    thirdOption: "Match the preceding qualifier zero or one times.",
    fourthOption: "Match a literal ? character.",
    correctAnswer: "#third-option"

},     {

    //QUESTION 53
    question: "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?", 
    firstOption: "By using the command :repeat followed by the number and the command.",
    secondOption: "By specifying the number right in front of a command such as 4l or 2yj.",
    thirdOption: "By selecting all affected lines using the shift and cursor keys before applying the command",
    fourthOption: "By issuing a command such as :set repetition=4 which repeats every subsequent command 4 times.",
    correctAnswer: "#second-option"

},     {
    //QUESTION 54
    question:  "Which of the following files, located in the user home directory, is used to store the Bash history?",
    firstOption: ".bash_history", 
    secondOption: ".bash_histfile", 
    thirdOption: ".history",
    fourthOption: ".bashrc_history",
    correctAnswer: "#first-option" 

},     {

    //QUESTION 56
    question:  "Which of the following commands displays the contents of a gzip compressed tar archive?",
    firstOption: "gzip archive.tgz | tar xvf -", 
    secondOption: "tar ztf archive.tgz",
    thirdOption: "gzip -d archive.tgz | tar tvf -", 
    fourthOption: "tar cf archive.tgz",
    correctAnswer: "#second-option"

},     {

    //QUESTION 57
    question:  "Which grep command will print only the lines that do not end with a / in the file foo?",
    firstOption: "grep '/$' foo", 
    secondOption: "grep '/#' foo", 
    thirdOption: "grep -v '/$' foo", 
    fourthOption: "grep -v '/#' foo",
    correctAnswer: "#third-option"

},     {

    //QUESTION 58
    question:  "Which of the following commands is used to change options and positional parameters for a running Bash?",
    firstOption: "history", 
    secondOption: "set",
    thirdOption: "bashconf", 
    fourthOption: "setsh",
    correctAnswer: "#second-option"


},     {

    //QUESTION 59
    question:  "Which of the following commands replaces each occurrence of 'bob' in the file letter with 'Bob' and writes the result to the file newletter?",
    firstOption: "sed '/bob/Bob' letter > newletter",
    secondOption: "sed s/bob/Bob/ letter < newletter", 
    thirdOption: "sed 's/bob/Bob' letter > newletter",
    fourthOption: "sed 's/bob/Bob/g' letter > newletter",
    correctAnswer: "#fourth-option" 

},     {

    //QUESTION 60
    question: "From a Bash shell, which of the following commands directly executes the instruction from the file /usr/local/bin/runme.sh without starting a subshell?",
    firstOption: "source /usr/local/bin/runme.sh", 
    secondOption: "/bin/sh /usr/local/bin/runme.sh",
    thirdOption: "/bin/bash /usr/local/bin/runme.sh", 
    fourthOption: "/usr/local/bin/runme.sh",
    correctAnswer: "#first-option"


},     {

    //QUESTION 61
    
    question:  " Regarding the command: nice -5 /usr/bin/prog  .Which of the following statements is correct?",
    firstOption: "/usr/bin/prog is executed with a nice level of -5.", 
    secondOption: "/usr/bin/prog is executed with a nice level of 5.",
    thirdOption: "/usr/bin/prog is executed with a priority of -5.", 
    fourthOption: "/usr/bin/prog is executed with a priority of 5.",
    correctAnswer: "#second-option"

},     {


    //QUESTION 62
    question:  "Which shell command is used to continue background execution of a suspended command?",
    firstOption: "&",
    secondOption: "bg", 
    thirdOption: "cont", 
    fourthOption: "exec", 
    correctAnswer: "#second-option"


},     {

    //QUESTION 63
    question:  "Which of the following shell redirections will write standard output and standard error output to a file named filename?",
    firstOption: "2>&1 >filename", 
    secondOption: ">filename 2>&1", 
    thirdOption: "1>&2>filename", 
    fourthOption: ">>filename",
    correctAnswer: "#second-option"


},     {

 //QUESTION 64
    question: "In the vi editor, Which of the following commands will copy the current line into the vi buffer?",
    firstOption: "c", 
    secondOption: "cc", 
    thirdOption: "1c", 
    fourthOption: "yy", 
    correctAnswer: "#fourth-option"


},     {



 //QUESTION 65
    question:  "Which of the following sequences in the vi editor saves the opened document and exits the editor?",
    firstOption: "escq ZZ", 
    secondOption: "ctrl :w!", 
    thirdOption: "esc zz", 
    fourthOption: "esc :wq!", 
    correctAnswer: "#second-option"


},     {

    //QUESTION 66
    question: "When starting a program with the nice command without any additional parameters, which nice level is set for the resulting process?",
    firstOption: "-10", 
    secondOption: "0", 
    thirdOption: "10", 
    fourthOption: "20",
    correctAnswer: "#third-option"

},     {
    //QUESTION 67
    question:  "Which of the following commands will reduce all consecutive spaces down to a single space?",
    firstOption: "tr '\s' ' ' < a.txt > b.txt", 
    secondOption: "tr -s ' ' < a.txt > b.txt",
    thirdOption: "tr -d ' ' < a.txt > b.txt", 
    fourthOption: "tr -r ' ' '\n' < a.txt > b.txt",
    correctAnswer: "#second-option"

},     {


    //QUESTION 68
    question:  "Which character, added to the end of a command, runs that command in the background as a child process of the current shell?",
    firstOption: "!", 
    secondOption: "+", 
    thirdOption: "&", 
    fourthOption: "%",
    correctAnswer: "#third-option"
     

},     {

    //QUESTION 69
    question:  "Which of the following commands will print the last 10 lines of a text file to the standard output?",
    firstOption: "cat -n 10 filename", 
    secondOption: "dump -n 10 filename", 
    thirdOption: "head -n 10 filename", 
    fourthOption: "tail -n 10 filename",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 70
    question:  "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    firstOption: "fmt -f 1,4 /etc/passwd",
    secondOption: "split -c 1,4 /etc/passwd",
    thirdOption: "cut -d : -f 1,4 /etc/passwd" ,
    fourthOption: "paste -f 1,4 /etc/passwd",
    correctAnswer: "#third-option"

},     {

    //QUESTION 71
    question:  "Which of the following signals is sent to a process when the key combination CTRL+C is pressed on the keyboard?",
    firstOption: "SIGTERM", 
    secondOption: "SIGINT",
    thirdOption: "SIGSTOP", 
    fourthOption: "SIGKILL",
    correctAnswer: "#second-option"

},     {
    //QUESTION 72
    question: "What happens after issuing the command vi without any additional parameters?",
    firstOption: "vi starts and loads the last file used and moves the cursor to the position where vi was when it last exited. ",
    secondOption: "vi starts and requires the user to explicitly either create a new or load an existing file. ",
    thirdOption: "vi exits with an error message as it cannot be invoked without a file name to operate on.",
    fourthOption: "vi starts in command mode and opens a new empty file.",
    correctAnswer: "#fourth-option"


},     {


    //QUESTION 73
    question:  "Which of the following command sets the Bash variable named TEST with the content FOO?",
    firstOption: "set TEST='FOO'", 
    secondOption: "TEST = 'FOO'", 
    thirdOption: "var TEST='FOO'", 
    fourthOption: "TEST='FOO'",
    correctAnswer: "#fourth-option"

},     
    {
    //QUESTION 74
    question:  "Which variable defines the directories in which a Bash shell searches for executable commands?",
    firstOption: "BASHEXEC", 
    secondOption: "BASHRC", 
    thirdOption: "PATH",
    fourthOption: "EXECPATH",
    correctAnswer: "#third-option" 


},     {

    //QUESTION 75
    question:  "Which of the following commands determines the type of a file by using a definition database file which contains information about all common file types?",
    firstOption: "magic", 
    secondOption: "type",
    thirdOption: "file",
    fourthOption: "pmagic",
    correctAnswer: "#third-option" 


},     {


    //QUESTION 77
    question:  "Which of the following commands prints all files and directories within the /tmp directory or its subdirectories Which are also owned by the user root?",
    firstOption: "find /tmp -uid root -print", 
    secondOption: "find -path /tmp -uid root", 
    thirdOption: "find /tmp -user root -print", 
    fourthOption: "find /tmp -name root",
    correctAnswer: "#third-option"

},     {


    //QUESTION 78
    question: "When running the command. sed -e 's/a/b/' /tmp/file >/tmp/file .While /tmp/file contains data, why is /tmp/file empty afterwards?",
    firstOption: "The file order is incorrect. The destination file must be mentioned before the command to ensure redirection.",
    secondOption: "The command sed did not match anything in that file therefore the output is empty.",
    thirdOption: "When the shell establishes the redirection it overwrites the target file before the redirected command starts and opens it for reading.", 
    fourthOption: "Redirection for shell commands do not work using the > character. It only works using the | character instead",
    correctAnswer: "#third-option"

},     {

    //QUESTION 79
    question:  "When given the following command line. echo 'foo bar' | tee bar | cat .Which of the following output is created?",
    firstOption: "cat",
    secondOption: "foo bar", 
    thirdOption: "tee bar", 
    fourthOption: "bar",
    correctAnswer: "#second-option"


},     {


    //QUESTION 80
    question:  "Which of the following commands can be used to determine how long the system has been running?",
    firstOption: "uptime",
    secondOption: "up",
    thirdOption: "toop",
    fourthOption: "uname -u",
    correctAnswer: "#first-option" 

},       {

    //QUESTION 82
    question:  "After successfully creating a hard link called bar to the ordinary file foo, foo is deleted from the filesystem. Which of the following describes the resulting situation?",
    firstOption: "foo and bar would both be removed.",
    secondOption: "foo would be removed while bar would remain accessible.",
    thirdOption: "foo would be removed. bar would still exist but would be unusable.", 
    fourthOption: "Both foo and bar would remain accessible.",
    correctAnswer: "#second-option"

},     {

    //QUESTION 83
    question: "After moving data to a new filesystem, how can the former path of the data be kept intact in order to avoid reconfiguration of existing applications?",
    firstOption: "By creating an ACL redirection from the old to the new path of the data.",
    secondOption: "By creating a hard link from the old to the new path of the data.",
    thirdOption: "By creating a symbolic link from the old to the new path of the data.",
    fourthOption: "By running the command touch on the old path.",
    correctAnswer: "#third-option"
    

},     {

    //QUESTION 84
    question:  "Which of the following commands changes the ownership of file.txt to the user dan and the group staff?",
    firstOption: "chown dan/staff file.txt",
    secondOption: "chown dan:staff file.txt",
    thirdOption: "chown -u dan -g staff file.txt",
    fourthOption: "chown dan -g staff file.txt",
    correctAnswer: "#second-option"

},     {


    //QUESTION 85
    question:  "Which of the following commands makes /bin/foo executable by everyone but writable only by its owner?",
    firstOption: "chmod u=rwx,go=rx /bin/foo",
    secondOption: "chmod o+rwx,a+rx /bin/foo",
    thirdOption: "chmod 577 /bin/foo",
    fourthOption: "chmod 775 /bin/foo",
    correctAnswer: "#first-option"

},     {

    //QUESTION 86
    question:  "Which of the following commands can be used to search for the executable file foo when it has been placed in a directory not included in $PATH?",
    firstOption: "apropos ",
    secondOption: "which",
    thirdOption: "find",
    fourthOption: "query",
    correctAnswer: "#third-option"

},     {


    //QUESTION 87
    question: "What does the command mount -a do?",
    firstOption: "It ensures that all file systems listed with the option noauto in /etc/fstab are mounted",
    secondOption: "It shows all mounted file systems that have been automatically mounted",
    thirdOption: "It opens an editor with root privileges and loads /etc/fstab for editing.",
    fourthOption: "It ensures that all file systems listed with the option auto in /etc/fstab are mounted",
    correctAnswer: "#second-option"

},     {

    //QUESTION 88
    question:  "Which of the following settings for umask ensures that new files have the default permissions -rw-r----- ?",
    firstOption: "0017",
    secondOption: "0640",
    thirdOption: "0038",
    fourthOption: "0027",
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 89
    question:  "Which of the following is the device file name for the second partition on the only SCSI drive?",
    firstOption: "/dev/hda1", 
    secondOption: "/dev/sda2", 
    thirdOption: "/dev/sd0a2", 
    fourthOption: "/dev/sd1p2",
    correctAnswer: "#second-option"

},     {

    //QUESTION 90
    question:  "In order to display all currently mounted filesystems,Which of the following commands could be used?",
    firstOption: "cat /proc/self/mounts", 
    secondOption: "free",
    thirdOption: "muont",
    fourthOption: "lsmounts",
    correctAnswer: "#first-option"


},     {


    //QUESTION 91
    question:  "Which of the following commands can be used to locate programs and their corresponding man pages and configuration files?",
    firstOption: "whereis", 
    secondOption: "Which",
    thirdOption: "basename", 
    fourthOption: "query",
    correctAnswer: "#first-option"
},     {



    //QUESTION 92
    question:  "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    firstOption: "tune2fs -d 200 /dev/sda1",
    secondOption: "tune2fs -c 200 /dev/sda1",
    thirdOption: "tune2fs -i 200 /dev/sda1",
    fourthOption: "tune2fs -n 200 /dev/sda1",
    correctAnswer: "#third-option"

},     {

    //QUESTION 93
    question:  "Which type of filesystem is created by mkfs when it is executed with the block device name only and without any additional parameters?",
    firstOption: "ext2", 
    secondOption: "ext3", 
    thirdOption: "ext4", 
    fourthOption: "XFS",
    correctAnswer: "#first-option"

},     {

    //QUESTION 94
    question: "How many fields are in a syntactically correct line of /etc/fstab?",
    firstOption: "3", 
    secondOption: "4", 
    thirdOption: "5", 
    fourthOption: "6", 
    correctAnswer: "#fourth-option"

},     {

    //QUESTION 96
    question:  "Which of the following file permissions belong to a symbolic link?",
    firstOption: "-rwxrwxrwx", 
    secondOption: "+rwxrwxrwx",
    thirdOption: "lrwxrwxrwx", 
    fourthOption: "srwxrwxrwx",
    correctAnswer: "#third-option"

},     {

    //QUESTION 97
    question: "Creating a hard link to an ordinary file returns an error.What could be the reason for this?",
    firstOption: "The source and the target are on different filesystems.",
    secondOption: "The source file is read-only.",
    thirdOption: "The source file is a shell script.",
    fourthOption: "The source file is already a hard link.",
    correctAnswer: "#first-option"

},     {

    //QUESTION 98
    question:  "Which of the following commands creates an ext3 filesystem on /dev/sdb1?",
    firstOption: "/sbin/mke2fs -j /dev/sdb1",
    secondOption: "/sbin/mkfs -t xfs /dev/sdb1",
    thirdOption: "/sbin/mkfs -c ext3 /dev/sdb1",
    fourthOption: "/sbin/mke3fs -j /dev/sdb1",
    correctAnswer: "#first-option"
    

},     {

    //QUESTION 99
    question:  "Which of the following commands will change the quota for a specific user?",
    firstOption: "edquota",
    secondOption: "repquota",
    thirdOption: "quota -e",
    fourthOption: "quota",
    correctAnswer: "#first-option"
    

},     {

    //QUESTION 100
    question:  "Which utility would be used to change how often a filesystem check is performed on an ext2 filesystem without losing any data stored on that filesystem?",
    firstOption: "mod2fs",
    secondOption: "fsck",
    thirdOption: "tune2fs",
    fourthOption: "mke2fs",
    correctAnswer: "#third-option"

},     {

    //QUESTION 101
    question:  "Which of the following Linux filesystems preallocates a fixed number of inodes at the filesystem's make/creation time and does NOT generate them as needed?",
    firstOption: "ext3",
    secondOption: "JFS",
    thirdOption: "ext5",
    fourthOption: "XFS",
    correctAnswer: "#first-option"

},     {

    //QUESTION 102
    question: "What is the purpose of the Filesystem Hierarchy Standard?",
    firstOption: "It is a security model used to ensure files are organized according to their permissions and accessibility. ",
    secondOption: "It provides unified tools to create, maintain and manage multiple filesystems in a common way.",
    thirdOption: "It defines a common internal structure of inodes for all compliant filesystems.",
    fourthOption: "It is a distribution neutral description of locations of files and directories.",
    correctAnswer: "#fourth-option"

    },
]










