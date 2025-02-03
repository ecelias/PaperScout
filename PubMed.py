from Bio import Entrez

class PubMed:
    def __init__(self, searchQuery, userEmail, numArticles=10, displaySearchQuery=False):
        self.searchQuery = searchQuery
        self.userEmail = userEmail
        self.displaySearchQuery = displaySearchQuery
        self.numArticles = numArticles
        self.idRecord = []

    def getQuery(self):
        return self.searchQuery
    
    def getEmail(self):
        return self.userEmail
    
    def getDisplayOpt(self):
        return self.displaySearchQuery
    
    def setEmail(self):
        Entrez.email = self.getEmail()

    def getRetMax(self):
        return self.numArticles
    
    def searchPubMed(self):
        self.setEmail()
        handle = Entrez.esearch(db="pubmed", term=self.getQuery(), retmax=self.getRetMax)
        record = Entrez.read(handle)
        return record["IdList"]
    
