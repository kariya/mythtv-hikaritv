#!/usr/bin/perl
# ウィキペディア (http://ja.wikipedia.org/) から人名っぽいのを取り出す
# [Step.1]
# wget http://download.wikimedia.org/jawiki/latest/jawiki-latest-pages-articles.xml.bz2
# [Step.2]
# bunzip2 -c jawiki-latest-pages-articles.xml.bz2 | prog.pl > wj-person.txt
use strict;
use warnings;
use Encode;
use utf8;
use open ':utf8';
binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";

$| = 1;
$/ = "<page>";

while (<>) {
    my $page = $_;
    if ($page =~ m{<title>(.+?)</title>}) {
	my $title = $1;
	next if $title =~ m{^([^<]+:|\d{4})};
	if ($page =~ m{(Category:\d+年生)}
	    # and $page !~ m{(Category:\d+年没)}
	    and $page !~ m{Category:[^\|]*(犬|馬)[\|\]]}
	    ) {
	    $title =~ s/\s+\(.+?\)\s*$//;
	    if ($page =~ m{(Category:.*声優.*)}) {
	    	print "声優:$title\n";
	    } elsif ($page =~ m{(Category:.*俳優.*)}) {
	    	print "俳優:$title\n";
	    } elsif ($page =~ m{(Category:.*棋士.*)}) {
	    	print "棋士:$title\n";
	    } elsif ($page =~ m{(Category:.*監督.*)}) {
	    	print "監督:$title\n";
	    }
	}
    }
}
