<%-- 
    Document   : index
    Created on : 2018-01-15, 20:44:47
    Author     : defto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="hello.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div>
            <br/>
            Welcome!
            <p>Login to administration panel <a href="/richUI">here</a></p>
            <p>Admin Users list <a href="/users">here</a></p>
            <p>Admin Books list <a href="/books">here</a></p>
            <br/><br/><br/>
            ************************
            <br/><br/><br/>
            <p>jQuery example from <a href="http://rest-service.guides.spring.io/greeting">this</a> site:</p>
            <div>
                <p class="greeting-id">The ID is </p>
                <p class="greeting-content">The content is </p>
            </div>
            <br/><br/><br/>
            ************************
            <br/><br/><br/>
            JSTL choose, when and otherwise example:
            <c:set var="income" scope="session" value="${4000*4}"/>  
            <p>Your income is : <c:out value="${income}"/></p>  
        <c:choose>  
            <c:when test="${income <= 1000}">  
                Income is not good.  
            </c:when>  
            <c:when test="${income > 10000}">  
                Income is very good.  
            </c:when>  
            <c:otherwise>  
                Income is undetermined...  
            </c:otherwise>  
        </c:choose>  
        <br/><br/><br/>
        ************************
        <br/><br/><br/>
        <p>JSTL for each example:</p>
        <table border="1">
            <tr>
                <td valign="top">
                    <h3>From 1 to 10</h3>

            <c:forEach var="i" begin="1" end="10">
                <c:out value="${i}" />

                <br />
            </c:forEach>
            </td>
            </tr>
        </div>
    </body>
</html>
