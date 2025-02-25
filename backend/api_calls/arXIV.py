import urllib
import feedparser

class arXIV:
    def __init__(self, searchTerms, numArticles=10, displaySearchQuery=False):
        self.searchQuery = searchTerms
        self.displaySearchQuery = displaySearchQuery
        self.numArticles = numArticles
        self.idRecord = []
        self.start=0
        self.baseURL = 'http://export.arxiv.org/api/query?'

    def getSearchTerms(self):
        return self.searchQuery
    
    def getDisplayOpt(self):
        return self.displaySearchQuery

    def getRetMax(self):
        return self.numArticles

    def getBaseURL(self):
        return self.baseURL
    
    def createQuery(self):
        search_query = self.getSearchTerms()
        start = 0                     
        max_results = self.getRetMax()
        query = 'search_query=%s&start=%i&max_results=%i'
        return query
    
    def getQuery(self):
        query = self.createQuery()
        feedparser._FeedParserMixin.namespaces['http://a9.com/-/spec/opensearch/1.1/'] = 'opensearch'
        feedparser._FeedParserMixin.namespaces['http://arxiv.org/schemas/atom'] = 'arxiv'

        # perform a GET request using the base_url and query
        response = urllib.urlopen(self.getBaseURL()+query).read()

        # parse the response using feedparser
        feed = feedparser.parse(response)
        return feed
    
    def parseResponse(self):
        feed = self.getQuery()

        # # print out feed information
        # print 'Feed title: %s' % feed.feed.title
        # print 'Feed last updated: %s' % feed.feed.updated

        # # print opensearch metadata
        # print 'totalResults for this query: %s' % feed.feed.opensearch_totalresults
        # print 'itemsPerPage for this query: %s' % feed.feed.opensearch_itemsperpage
        # print 'startIndex for this query: %s'   % feed.feed.opensearch_startindex

        # # Run through each entry, and print out information
        # for entry in feed.entries:
        #     print 'e-print metadata'
        #     print 'arxiv-id: %s' % entry.id.split('/abs/')[-1]
        #     print 'Published: %s' % entry.published
        #     print 'Title:  %s' % entry.title
            
        #     # feedparser v4.1 only grabs the first author
        #     author_string = entry.author
            
        #     # grab the affiliation in <arxiv:affiliation> if present
        #     # - this will only grab the first affiliation encountered
        #     #   (the first affiliation for the first author)
        #     # Please email the list with a way to get all of this information!
        #     try:
        #         author_string += ' (%s)' % entry.arxiv_affiliation
        #     except AttributeError:
        #         pass
            
        #     print 'Last Author:  %s' % author_string
            
        #     # feedparser v5.0.1 correctly handles multiple authors, print them all
        #     try:
        #         print 'Authors:  %s' % ', '.join(author.name for author in entry.authors)
        #     except AttributeError:
        #         pass

        #     # get the links to the abs page and pdf for this e-print
        #     for link in entry.links:
        #         if link.rel == 'alternate':
        #             print 'abs page link: %s' % link.href
        #         elif link.title == 'pdf':
        #             print 'pdf link: %s' % link.href
            
        #     # The journal reference, comments and primary_category sections live under 
        #     # the arxiv namespace
        #     try:
        #         journal_ref = entry.arxiv_journal_ref
        #     except AttributeError:
        #         journal_ref = 'No journal ref found'
        #     print 'Journal reference: %s' % journal_ref
            
        #     try:
        #         comment = entry.arxiv_comment
        #     except AttributeError:
        #         comment = 'No comment found'
        #     print 'Comments: %s' % comment
            
        #     # Since the <arxiv:primary_category> element has no data, only
        #     # attributes, feedparser does not store anything inside
        #     # entry.arxiv_primary_category
        #     # This is a dirty hack to get the primary_category, just take the
        #     # first element in entry.tags.  If anyone knows a better way to do
        #     # this, please email the list!
        #     print 'Primary Category: %s' % entry.tags[0]['term']
            
        #     # Lets get all the categories
        #     all_categories = [t['term'] for t in entry.tags]
        #     print 'All Categories: %s' % (', ').join(all_categories)
            
        #     # The abstract is in the <summary> element
        #     print 'Abstract: %s' %  entry.summary